<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2020/4/30 10:29
 -->
<template>
  <div id="header-view">
    <div class="header-logo">
      <img src="../assets/img/logo.png" alt="" width="67px">
    </div>
    <el-menu
      :default-active="activeIndex"
      text-color="#333"
      active-text-color="#F63"
      mode="horizontal"
      router
      class="header-menu"
    >
      <el-menu-item index="/">
        首页
      </el-menu-item>
      <el-menu-item index="/member">
        明星智客
      </el-menu-item>
      <!--<el-menu-item index="3">需求大厅</el-menu-item>-->
      <el-menu-item index="/about">
        关于收稻
      </el-menu-item>
      <el-popover
        popper-class="menu-popover"
        placement="bottom"
        :visible-arrow="false"
        trigger="hover"
      >
        <img src="../assets/img/qa_qr.png" alt="" width="390px">
        <span slot="reference" class="qa-span">公益问答</span>
      </el-popover>
    </el-menu>
    <div class="header-login">
      <el-dropdown trigger="click" placement="bottom" @command="registerSubmit">
        <span>注册</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="1">
            个人注册
          </el-dropdown-item>
          <el-dropdown-item command="2">
            企业注册
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: ''
    };
  },
  watch: {
    $route () {
      this.activeIndex = '/' + this.$route.path.split('/')[1];
    }
  },
  mounted () {
    this.activeIndex = '/' + this.$route.path.split('/')[1];
  },
  methods: {
    // 注册按钮
    registerSubmit (command) {
      console.log(command);
    }
  }
};
</script>

<style lang="scss" scoped>
    #header-view {
        width: 1200px;
        margin: 0px auto;
        display: flex;
        align-items: center;
        .header-logo {
            cursor: pointer;
            padding-right: 33%;
            img {
                vertical-align: middle;
            }
        }
        .header-menu {
            border-bottom: 1px solid #ececec;
            .qa-span {
                height: 60px;
                line-height: 60px;
                padding: 0 20px;
                cursor: pointer;
                display: inline-block;
            }
        }
        .header-login {
            flex: 1;
            text-align: right;
            span {
                color: #333;
                cursor: pointer;
                padding: 0px 24px;
                font-size: 14px;
                display: inline-block;
            }
        }
    }
</style>
