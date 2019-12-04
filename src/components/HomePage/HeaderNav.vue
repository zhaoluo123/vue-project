<template>
    <div class="headerNav">
        <collapse-menu></collapse-menu>
        <breadcrumb></breadcrumb>
        <div class="header-right-nav">
            <full-screen></full-screen>
            <span class="split-bar">|</span>
            <switch-language></switch-language>
            <span class="split-bar">|</span>
            <span>Tenant</span>
            <span class="split-bar">|</span>
            <span>版本号</span>
        </div>
    </div>
</template>

<script>
    import CollapseMenu from './MenuCollapse'
    import Breadcrumb from './Breadcrumb'
    import SwitchLanguage from './SwitchLanguage'
    import FullScreen from './FullScreen'
    export default {
        name: "Header",
        components: {
          CollapseMenu,
          Breadcrumb,
          SwitchLanguage,
          FullScreen,
        },
        methods: {
        }
    }
</script>

<style scoped>
    .headerNav {
        color: #ffffff;
        height: 100%;
        display:flex;align-items:center;
        position: relative;
    }
    .header-right-nav {
        position: absolute;
        line-height: 60px;
        right: 0;
    }
    .headerNav .full-screen {
        font-size: 20px;
        cursor: pointer;
    }
    .split-bar {
        margin-left: 10px;
        margin-right: 10px;
    }

</style>