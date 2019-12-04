<template>
    <div class="tags-view-div">
        <el-tag
                v-for="(item,index) in visitedViews"
                :key="item.index"
                :type="item.type"
                :effect="item.effect"
                :closable="!item.route.meta.fixed"
                :class="`menuTag${index}`"
                @click="openCurrentView(item)"
                @close="closeCurrentView(item)"
                @contextmenu.prevent.native="openTagMenu(item,index)"
                size="medium">
            <i v-if="item.visiting" class="el-icon-s-flag"></i>
            {{ $t(`msg.common.${item.label}`) }}
        </el-tag>
        <ul class="tag-ul" v-if="showTagMenu" :style="{left: leftOffset, top: topOffset}">
            <li @click="refreshTagView">更新</li>
            <li @click="closeOthersTag">关闭其他</li>
            <li @click="closeAllTag">关闭所有</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TagsView",
        data() {
            return {
                leftOffset: '',
                topOffset: '',
                showTagMenu: false,
                selectedTag: null,
                fixedRoute: null,
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tagsView.visitedViews;
            }
        },
        watch: {
            $route() {
                const { name } = this.$route;
                if(name) {
                    this.addTags();
                    this.moveToCurrentTag()//更新tag的激活状态
                }
            }
        },
        created(){
            const { name, meta } = this.$route;
            if(name) {
                if(!meta.fixed) {
                    //获取首页路由信息
                    this.getFixedRoute();
                    this.$store.dispatch("addView", this.fixedRoute).catch(err => { console.log(err); });
                }
                this.addTags();
                this.moveToCurrentTag()//更新tag的激活状态
            }
        },
        methods: {
            addTags() {
                this.$store.dispatch("addView", this.$route).catch(err => { console.log(err); });
            },
            moveToCurrentTag() {
                this.$store.dispatch("updateVisitedView", this.$route).catch(err => { console.log(err); });
            },
            openCurrentView(item) {
                this.$router.push(item.route);
                this.showTagMenu = false;
            },
            closeCurrentView(item) {
                this.$store.dispatch("deleteView", item.route).catch(err => { console.log(err); });
                //激活最后一个标签
                let lastTagPath = this.visitedViews[this.visitedViews.length - 1].route.path;
                this.$router.push(lastTagPath);
            },
            openTagMenu(item, index) {
                this.leftOffset = (document.querySelector(`.menuTag${index}`).getBoundingClientRect().left + 10) + 'px';
                this.topOffset = (document.querySelector(`.menuTag${index}`).getBoundingClientRect().top + 20) + 'px';
                this.showTagMenu = true;
                this.selectedTag = item;
            },
            refreshTagView() {
                this.$store.dispatch('deleteCachedView', this.selectedTag.route).then(() => {
                     this.$router.push('/redirect' + this.selectedTag.route.fullPath);
                     this.showTagMenu = false;
                })
            },
            closeOthersTag() {
                this.$router.push(this.selectedTag.route);
                this.$store.dispatch("deleteOthersView", this.selectedTag.route).catch(err => { console.log(err); });
                this.moveToCurrentTag();
                this.showTagMenu = false;
            },
            closeAllTag() {
                this.$store.dispatch("deleteAllView").catch(err => { console.log(err); });
                this.getFixedRoute();
                this.$router.push(this.fixedRoute);
                this.moveToCurrentTag();
                this.showTagMenu = false;
            },
            getFixedRoute() {
                const routes = this.$router.options.routes;
                for(let route of routes) {
                    if(route.children) {
                        this.fixedRoute = route.children.find(r => r.meta && r.meta.fixed);
                        if(this.fixedRoute) {
                            break;
                        }
                    }
                }
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .tags-view-div {
        height: 34px;
        background-color: #ffffff;
        padding-top: 3px;
        box-sizing: border-box;
        border-bottom: 2px solid #d9d9d9;
    }
    .tags-view-div .el-tag {
        margin: 0 1px;
        cursor: pointer;
    }
    .tag-ul {
        list-style: none;
        position: fixed;
        background-color: #ffffff;
        width: 80px;
        z-index: 100;
        padding-left: 5px;
        border-radius: 5px;
        box-shadow: 2px 2px 1px #bfbfbf;
        font-size: 12px;
    }
    .tag-ul li {
        cursor: pointer;
        padding: 3px;
        &:hover {
            color: #409EFF;
        }
    }

</style>