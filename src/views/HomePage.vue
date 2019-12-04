<template>
  <div class="home">
    <el-container class="full-container">
      <el-aside>
        <side-menu></side-menu>
      </el-aside>
      <el-container class="side-main-container">
        <el-header>
          <header-nav></header-nav>
        </el-header>
        <el-main>
          <tags-view></tags-view>
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
              <router-view class="content-container"></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import SideMenu from '../components/HomePage/SideMenu'
  import TagsView from '../components/HomePage/TagsView'
  import HeaderNav from '../components/HomePage/HeaderNav'

export default {
    name: 'home',
    components: {
        SideMenu,
        TagsView,
        HeaderNav
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        cachedViews() {
            return this.$store.state.tagsView.cachedViews;
        },
    }
}
</script>
<style>
  .home {
    height: 100%;
  }
  .full-container {
    height: 100%;
  }
  .side-main-container {
    height: 100%;
    float: left;
  }
  .el-header {
    background-color: rgb(84, 92, 100);
    line-height: 60px;
    height: 10% !important;
    min-height: 60px;
  }

  .el-aside {
    width: auto !important;
    height: 100%;
    float: left;
    background-color: rgb(84, 92, 100);
    color: #333;
    padding-right: 5px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
    padding: 0 !important;
  }
  .content-container {
    padding: 20px;
  }
</style>
