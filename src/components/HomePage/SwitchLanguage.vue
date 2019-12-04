<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <div>
      <img class="header-svg" src="../../assets/svg/language-white.svg" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

export default {
  data() {
    return {
        language: 'zh',
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang',lang);
      this.language = lang;
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
<style>
    .header-svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
</style>
