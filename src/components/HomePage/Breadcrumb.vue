<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in breadcrumbArr" :key="item.path">{{item.menuName}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
        computed: {
            breadcrumbArr() {
                return this.$route.matched.filter(route => route.path).map(route => {
                    return {
                        path: route.path,
                        menuName: this.$t(`msg.common.${route.meta.menuName}`)
                    };
                })
            }
        }
    }
</script>

<style>
    .breadcrumb {
        float: left;
        margin-left: 20px;
    }
    .el-breadcrumb__inner.is-link, .el-breadcrumb__inner {
        color: #C0C4CC !important;
    }

</style>