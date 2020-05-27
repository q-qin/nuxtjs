<template>
  <el-container>
    <el-header>
      <header-view />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <footer-view />
    </el-footer>
  </el-container>
</template>

<script>
import HeaderView from '../components/HeaderView';
import FooterView from '../components/FooterView';
export default {
  components: {
    HeaderView,
    FooterView
  },
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
    .el-header {
        padding: 0px;
        height: 61px!important;
        position: fixed;
        width: 100%;
        background: #FFF;
        z-index: 999;
        border-bottom: 1px solid #ececec;
    }
    .el-main {
        /*width: 1200px;*/
        width: 100%;
        margin: 0px auto;
        padding: 61px 0px 0px;
        min-height: calc(100vh - 297px);
    }
    .el-footer {
        padding: 0px;
        height: 100%!important;
        background: #252525;
    }
</style>
