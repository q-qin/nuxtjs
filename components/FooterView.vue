<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2020/4/30 10:31
 -->
<template>
  <div id="footer-view">
    <div class="footer-info">
      <div>
        <p class="info-title">
          联系方式
        </p>
        <p>400-799-8858</p>
        <p>（9:00-12:00,13:00-17:00 工作日）</p>
        <p>邮箱：service@shoudaozi.com</p>
        <p>地址：苏州市工业园区唯华路5号曼哈顿广场君地大厦15楼</p>
      </div>
      <div>
        <p class="info-title">
          新手指南
        </p>
        <p>
          <span>平台简介</span>
          <span>需求者规范</span>
        </p>
        <p>
          <span>交易规则</span>
          <span>服务者规范</span>
        </p>
        <p>
          <span>法律声明</span>
          <span>举报处理制度</span>
        </p>
        <p>新闻资讯</p>
      </div>
      <div>
        <p class="info-title">
          收稻微信平台
        </p>
        <div class="qrcode-img">
          <div>
            <img src="../assets/img/qrcode_for_mp.jpg" alt="">
            <p class="weixin-tip">
              微信公众号
            </p>
          </div>
          <div>
            <img src="../assets/img/shoudao_qrcode.png" alt="">
            <p class="weixin-tip">
              收稻客服
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <img src="../assets/img/cert.png" alt="">
      <span>© 2015-2020 shoudaozi.com 版权所有</span>
      <span>增值电信业务经营许可证：浙B2-20191230</span>
      <span>ICP备案号：浙ICP备17035207号-1</span>
      <img src="../assets/img/ab.png" alt="">
      <span>浙公网安备33078202000845号</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
    #footer-view {
        color: #FFF;
        padding: 35px 0px 0px;
        .footer-info {
            display: flex;
            width: 1200px;
            margin: 0px auto;
            padding-bottom: 45px;
            border-bottom: 1px solid #e5e5e5;
            > div {
                flex: auto;
                font-size: 14px;
                line-height: 31px;
                .info-title {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 17px;
                    margin-bottom: 16px;
                }
                p {
                    span:first-child {
                        padding-right: 48px;
                    }
                }
                img {
                    width: 85px;
                }
                .qrcode-img {
                    display: flex;
                    > div {
                        flex: auto;
                    }
                }
                .weixin-tip {
                    width: 85px;
                    line-height: 1;
                    text-align: center;
                }
            }
        }
        .footer-copy {
            width: 1200px;
            margin: 0px auto;
            padding: 10px 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                display: inline-block;
                padding: 0px 20px 0px 5px;
            }
        }
    }
</style>
