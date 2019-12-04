<template>
  <div>
    <el-menu
            :collapse="isCollapse"
            :default-active="currentRoutePath"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            router
            unique-opened
            active-text-color="#ffd04b">
      <el-menu-item :index="`${mainIndex.children[0].path}`">
        <i :class="mainIndex.children[0].meta.icon"></i>
        <span>{{$t(`msg.common.${mainIndex.children[0].meta.menuName}`)}}</span>
      </el-menu-item>
      <el-submenu v-for="(item,index) in subMenus" :index='`${index+2}`' :key="index">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{$t(`msg.common.${item.meta.menuName}`)}}</span>
        </template>
        <el-menu-item v-for="(child, childIndex) in item.children.filter(secondMenu => !secondMenu.hidden)"
                      :index='`${item.path}/${child.path}`'
                      :key="childIndex">
          <span slot="title">{{$t(`msg.common.${child.meta.menuName}`)}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'SideMenu',
    data(){
      return {
      }
    },
    created() {
    },
    computed: {
      mainIndex() {
          return this.$router.options.routes[2];//首页
      },
      subMenus() {
          return this.$router.options.routes.filter(route => route.name !== 'login' && route.name !== 'main' && route.name !== 'redirect');
      },
      currentRoutePath() {
          return this.$route.fullPath;
      },
      isCollapse() {
          return this.$store.state.menuCollapse.menuCollapseStatus;
      }
    },
    methods: {
      getMenuName(item) {
          let userMenus = JSON.parse(localStorage.getItem('userMenus'));
          let matchedMenu = userMenus.find(menu => menu.flag === item.name);
          if(matchedMenu) {
              if(this.$i18n.locale === 'zh') {
                  return matchedMenu.zhName;
              }
              return matchedMenu.enName;
          }
          return item.meta.menuName;
      }
    }
}
</script>
<style>
  .el-aside .el-menu {
    border-right: 0;
  }
  .el-aside .el-submenu__title i,
  .el-aside .el-menu-item i {
    color: #ffffff !important;
  }


</style>
