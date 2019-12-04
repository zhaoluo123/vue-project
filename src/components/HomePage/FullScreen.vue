<template>
  <div class="full-screen-css">
    <img v-show="!isFullScreen"
         class="header-png"
         src="../../assets/img/fullScreen.png"
         @click="switchScreen"
         :title="$t('msg.common.fullScreen')"/>
    <img v-show="isFullScreen"
         class="header-png"
         src="../../assets/svg/exit-fullScreen-white.svg"
         @click="switchScreen"
         :title="$t('msg.common.exitFullScreen')"/>
  </div>
</template>

<script>

export default {
  name: 'FullScreen',
  data() {
    return {
      isFullScreen: false
    }
  },
  methods: {
      switchScreen() {
          let element = document.getElementById('app');
          if(!this.isFullScreen){
              element.webkitRequestFullScreen()
          }else {
              document.webkitCancelFullScreen();
          }
          this.isFullScreen = !this.isFullScreen;
    }
  }
}
</script>

<style scoped>
  .header-png {
    width: 25px;
    height: 20px;
    cursor: pointer;
  }
  .full-screen-css {
    display: inline-block;
  }
</style>
