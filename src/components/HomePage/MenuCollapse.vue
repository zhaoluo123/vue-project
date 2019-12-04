<template>
    <div class="collapse-menu">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="switchMenuCollapse"></i>
    </div>
</template>

<script>
    export default {
        name: "CollapseMenu",
        computed: {
            isCollapse() {
                return this.$store.state.menuCollapse.menuCollapseStatus;
            }
        },
        methods: {
            switchMenuCollapse() {
                this.$store.dispatch("switchMenuCollapse").catch(err => { console.log(err); });
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .collapse-menu {
        float: left;
    }
    .collapse-menu i{
        font-size: 20px;
        cursor: pointer;
        &:hover {
            color: #409EFF;
        }
    }
</style>