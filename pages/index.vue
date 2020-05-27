<template>
  <div id="home-view">
        <el-carousel trigger="click" height="476px">
            <el-carousel-item v-for="(item, key) in bannerList" :key="key">
                <img :src="item.url" class="banner-img" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="area-num warp-width">
            <div>
                <p class="num">50200<i>+</i><span>位</span></p>
                <p>认证智客</p>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div>
                <p class="num">7000<i>+</i><span>家</span></p>
                <p>认证企业</p>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div>
                <p class="num">138000<i>+</i><span>单</span></p>
                <p>成交项目数</p>
            </div>
        </div>
        <div class="star-list warp-width">
            <p class="title"><span class="color-f63">3万+</span>优秀智客已加入收稻</p>
            <div class="list-content">
                <div class="item-info" v-for="i in 8" :key="i">
                    <div class="image">
                        <img src="http://img2.shoudaozi.com/gxpt/Xq/20190828/20190828190301302867.jpg" width="100%" height="100%" alt="">
                    </div>
                    <p class="name">
                        芦秀清 <i class="el-icon-location"></i><span>上海市</span>
                    </p>
                    <p class="primary">项目流程管理咨询专家项目流程管理咨询专家项目流程管理咨询专家</p>
                    <p class="secondprimary">企业项目管理,私董会,萨提亚</p>
                    <p class="helpnum">关注数: <span>2547</span>经验值: <span>9.5</span></p>
                    <el-button type="primary">查看TA</el-button>
                </div>
            </div>
        </div>
        <div class="real-list star-list warp-width">
            <div class="real-time">
                <p class="real-title">智客实时收入</p>
                <client-only>
                    <vue-seamless-scroll :data="realData" :class-option="optionHover" class="seamless-warp">
                        <div class="real-scroll">
                            <div class="real-item" v-for="(item, key) in realData" :key="key">
                                <div>
                                    <div class="real-img">
                                        <img src="http://img2.shoudaozi.com/gxpt/Xq/20190828/20190828190301302867.jpg" width="100%" height="100%" alt="">
                                    </div>
                                    <div class="real-workroom">
                                        <p>猩猩工作室{{item}}</p>
                                        <p>
                                            赚了<span>500</span>元
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </vue-seamless-scroll>
                </client-only>
            </div>
            <div class="list-content">
                <div class="item-info" v-for="i in 2" :key="i">
                    <div class="image">
                        <img src="http://img2.shoudaozi.com/gxpt/Xq/20190828/20190828190301302867.jpg" width="100%" height="100%" alt="">
                    </div>
                    <p class="name">
                        芦秀清 <i class="el-icon-location"></i><span>上海市</span>
                    </p>
                    <p class="primary">项目流程管理咨询专家项目流程管理咨询专家项目流程管理咨询专家</p>
                    <p class="secondprimary">企业项目管理,私董会,萨提亚</p>
                    <p class="helpnum">关注数: <span>2547</span>经验值: <span>9.5</span></p>
                    <el-button type="primary">查看TA</el-button>
                </div>
            </div>
        </div>
        <div class="more-star warp-width">
            <el-button plain icon="el-icon-s-custom">更多智客</el-button>
        </div>
        <div class="brand-develop warp-width">
            <p class="title">收稻助力个人<span class="color-f63">品牌发展</span>，提供创业机会</p>
            <div class="brand-publicity">
                <div class="step" :class="{step01: stepShow}">
                    <p>免费入驻</p>
                    <p>收稻为全球智客提供免费展示自己的平台</p>
                </div>
                <div class="step" :class="{step02: stepShow}">
                    <p>品牌塑造</p>
                    <p>品牌定位、智客经纪人、品牌内容输出梳理</p>
                </div>
                <div class="step" :class="{step03: stepShow}">
                    <p>合作机会</p>
                    <p>走进50+园区，5W+企业，海量需求，助力个人创业</p>
                </div>
                <div class="step" :class="{step04: stepShow}">
                    <p>服务保障</p>
                    <p>第三方资金平台，保障智客服务利益，先付款后服务</p>
                </div>
                <div class="step" :class="{step05: stepShow}">
                    <p>零成本创业</p>
                    <p>一站式服务（注册服务、交易服务、代理记帐、个税申报）</p>
                </div>
            </div>
        </div>
        <div class="service-process warp-width">
            <p class="title">智客与企业合作流程</p>
            <div class="workflow-stage">
                <div class="stage">
                    <i class="el-icon-edit-outline"></i>
                    <span></span>
                    <p class="tip">1.发布服务</p>
                    <p class="desc">智客发布可提供的服务，增加曝光量，获得更多合作商机</p>
                </div>
                <div class="stage">
                    <i class="el-icon-chat-line-round"></i>
                    <span></span>
                    <p class="tip">2.企业预约智客服务</p>
                    <p class="desc">企业可阅览智客个人服务空间，在线预约智客服务</p>
                </div>
                <div class="stage">
                    <i class="el-icon-postcard"></i>
                    <span></span>
                    <p class="tip">3.开启合作</p>
                    <p class="desc">接受企业预约，开启合作之旅资金平台托管，报酬有保障</p>
                </div>
                <div class="stage">
                    <i class="el-icon-money"></i>
                    <span></span>
                    <p class="tip">4.结算合作报酬</p>
                    <p class="desc">双方确认项目成果，结算合作报酬</p>
                </div>
            </div>
        </div>
        <div class="successful-case warp-width">
            <p class="title">成功案例 · 适用场景</p>
            <div class="case-list">
                <div class="case case01">
                    <p>营销推广</p>
                    <el-button type="primary">查看案例</el-button>
                </div>
                <div class="case case02">
                    <p>商业服务</p>
                    <el-button type="primary">查看案例</el-button>
                </div>
                <div class="case case03">
                    <p>专业设计</p>
                    <el-button type="primary">查看案例</el-button>
                </div>
                <div class="case case04">
                    <p>文稿写作</p>
                    <el-button type="primary">查看案例</el-button>
                </div>
            </div>
        </div>
        <div class="expert-opinion warp-width">
            <p class="title">专家观点</p>
            <div class="expert-list">
                <div class="expert" :class="{'on':key==expertIndex}" @mouseenter="expertMouseOver(key)"
                     v-for="(item, key) in expertList" :key="key">
                    <img :src="item.avartar" alt="">
                </div>
            </div>
            <div class="expert-conent">
                <p class="desc">"{{expertdesc}}"</p>
                <div class="img">
                    <img :src="expertimg" width="100%" alt="">
                </div>
                <p class="job">{{expertjob}}</p>
            </div>
        </div>
        <div class="cooperation-list">
            <p class="title">超过<span class="color-f63">5000+</span>企业选择收稻</p>
            <div class="img-list warp-width">
                <div class="img" v-for="i in 15" :key="i">
                    <img src="http://test.shoudaozi.com/Default/img/home/1_new.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from '@/api/user'

export default {
  // 获取到数据之后，data来接收
  async asyncData ({$axios}) {
    return {
      a:1
    }
  },
  components: {
  },
  data(){
    return {
      a:'',
      bannerList: [
          {url: 'http://img2.shoudaozi.com/gxpt/Xq/20191114/20191114180042441732.jpg', id: 1},
          {url: 'http://img2.shoudaozi.com/gxpt/Xq/20200428/20200428142343369145.png', id: 2},
          {url: 'http://img2.shoudaozi.com/gxpt/Xq/20191114/20191114180120123096.jpg', id: 3},
      ],
      realData: [1,2,3,4,5,6,7,8,9,10],
      stepShow: false,
      expertList: [
          {
              avartar: 'http://img2.shoudaozi.com/gxpt/News/20191121/9.png',
              name: '刘丹',
              title: '维信集团副总经理',
              desc:
                  '对于一家有一百多个门店，几千名员工的香港上市企业，在平台化转型过程中如何合理合规的降低成本，提升效率，同时使员工更加快乐的享受工作?当我们选择与收稻合作时，这一切有望迎刃而解。',
              logo: 'http://img2.shoudaozi.com/gxpt/News/20191121/5.png'
          },
          {
              avartar: 'http://img2.shoudaozi.com/gxpt/News/20191121/8.png',
              name: '黄蔚',
              title: '桥中创新创始人',
              desc:
                  '大量跨界、高学历、高认知的设计精英带来的管理挑战和收入结算问题，让我们果断选择了收稻，让我们省心。',
              logo: 'http://img2.shoudaozi.com/gxpt/News/20191121/4.png'
          },
          {
              avartar: 'http://img2.shoudaozi.com/gxpt/News/20191121/6.png',
              name: '魏巍',
              title: '美团点评配送事业部总经理',
              desc: '数字化技术赋能，是构建美团生态链，强运营的一大优势。',
              logo: 'http://img2.shoudaozi.com/gxpt/News/20191121/2.png'
          },
          {
              avartar: 'http://img2.shoudaozi.com/gxpt/News/20191121/7.png',
              name: '张磊',
              title: '喜马拉雅人力资源副总裁',
              desc:
                  '社会化时代，企业与周边生态合作共赢，处理多化关系的底层逻辑就是利他。',
              logo: 'http://img2.shoudaozi.com/gxpt/News/20191121/3.png'
          },
          {
              avartar: 'http://img2.shoudaozi.com/gxpt/News/20191121/10.png',
              name: '刘晓宇',
              title: '房多多合伙人总政委',
              desc:
                  '房多多的平台化模式离不开产品技术、资源和线上线下的运营服务三方面赋能。',
              logo: 'http://img2.shoudaozi.com/gxpt/News/20191121/1.png'
          }
      ],
      expertIndex: 0,
      expertdesc: '',
      expertimg: '',
      expertjob: '',
    }
  },
  computed: {
      optionHover () {
          return {
              step: 0.5,
              hoverStop: false
          }
      }
  },
  async created(){
    // const {code,data} = await login({a:1})
    console.log(this.a)
  },
  mounted(){
    window.onscroll = () => {
        let scrolltop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 1500) {
            this.stepShow = true;
        }
    };
    this.autoShowExpert();
  },
  methods:{
    expertMouseOver (index) {
        this.expertIndex = index;
        this.expertdesc = this.expertList[index].desc;
        this.expertimg = this.expertList[index].logo;
        this.expertjob = this.expertList[index].title + ' ' + this.expertList[index].name;
    },
    autoShowExpert () {
        this.expertdesc = this.expertList[this.expertIndex].desc;
        this.expertimg = this.expertList[this.expertIndex].logo;
        this.expertjob = this.expertList[this.expertIndex].title + ' ' + this.expertList[this.expertIndex].name;
        setInterval(() => {
            if (this.expertIndex < 4) {
                this.expertIndex ++;
            } else {
                this.expertIndex = 0;
            }
            this.expertdesc = this.expertList[this.expertIndex].desc;
            this.expertimg = this.expertList[this.expertIndex].logo;
            this.expertjob = this.expertList[this.expertIndex].title + ' ' + this.expertList[this.expertIndex].name;
        }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
#home-view {
        .banner-img {
            width: 100%;
            height: 476px;
            object-fit: cover;
        }
        .area-num {
            display: flex;
            background: #FFF;
            margin-top: 30px;
            align-items: center;
            justify-content: space-evenly;
            > div {
                .num {
                    font-size: 32px;
                    padding-top: 19px;
                    i {
                        font-size: 30px;
                        font-style: normal;
                        vertical-align: text-top;
                    }
                    span {
                        font-size: 14px;
                    }
                }
                p {
                    font-size: 16px;
                    line-height: 37px;
                    text-align: center;
                }
            }
            .el-divider--vertical {
                height: 3em;
            }
        }
        .star-list {
            margin-top: 20px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                margin-bottom: 30px;
            }
            .list-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .item-info {
                    width: 270px;
                    height: 356px;
                    overflow: hidden;
                    background: #FFF;
                    margin-bottom: 40px;
                    .image {
                        height: 198px;
                        text-align: center;
                        img {
                            transition: 0.4s;
                        }
                    }
                    .name {
                        font-size: 16px;
                        font-weight: bold;
                        line-height: 38px;
                        i {
                            color: #999;
                            padding-left: 10px;
                        }
                        span {
                            color: #999;
                            font-size: 14px;
                            font-weight: bold;
                        }
                    }
                    p {
                        font-size: 12px;
                        line-height: 36px;
                        margin: 0px 10px;
                        transition: 0.4s;
                    }
                    button {
                        width: 100%;
                    }
                    .primary {
                        border-bottom: 1px dashed #e5e5e5;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .secondprimary {
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .helpnum {
                        padding-bottom: 10px;
                        span {
                            color: #F63;
                            padding-right: 5px;
                        }
                    }
                    &:hover {
                        img {
                            border-radius: 0 0 50px 50px;
                            width: 45%;
                            height: 45%;
                        }
                        p {
                            text-align: center;
                            transform: translateY(-90px);
                        }
                        button {
                            transform: translateY(-40px);
                        }
                    }
                }
            }
        }
        .real-list {
            display: flex;
            margin-bottom: 40px;
            .real-time {
                width: 580px;
                background: #FFF;
                margin-right: 40px;
                padding: 0px 10px;
                border-radius: 8px;
                .real-title {
                    font-size: 16px;
                    height: 55px;
                    line-height: 55px;
                    border-bottom: 1px dashed #e5e5e5;
                }
                .seamless-warp {
                    height: 300px;
                    overflow: hidden;
                    .real-scroll {
                        display: flex;
                        flex-wrap: wrap;
                        .real-item {
                            width: 50%;
                            padding: 8px;
                            > div {
                                display: flex;
                                align-items: center;
                                .real-img {
                                    width: 44px;
                                    height: 44px;
                                    margin: 0px 20px;
                                    img {
                                        border-radius: 50%;
                                    }
                                }
                                .real-workroom {
                                    span {
                                        color: #FF6633;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .list-content {
                flex: auto;
                .item-info {
                    margin-bottom: 0px;
                }
            }
        }
        .more-star {
            text-align: center;
            button {
                width: 150px;
                height: 46px;
            }
        }
        .brand-develop {
            margin-top: 20px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                margin-bottom: 30px;
            }
            .brand-publicity {
                width: 100%;
                height: 460px;
                position: relative;
                background: url('../assets/img/home/norule.jpg') no-repeat center center;
                .step {
                    color: #666;
                    width: 209px;
                    height: 88px;
                    padding: 10px;
                    font-size: 14px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0 1px 7px 0 rgba(131, 128, 173, 0.3);
                    border-radius: 4px;
                    &::after {
                        content: "";
                        left: 90px;
                        border-style: solid;
                        border-width: 12px;
                        border-color: transparent #fff transparent transparent;
                        display: block;
                        position: absolute;
                        bottom: -23px;
                        transform: rotate(-90deg);
                    }
                    &:nth-child(even) {
                        &::after {
                            bottom: 100%;
                            transform: rotate(90deg);
                        }
                    }
                    position: absolute;
                    opacity: 0;
                    @keyframes fadein {
                        0% {
                            opacity: 0;
                            transform: translateX(-500px);
                        }
                        100% {
                            opacity: 1;
                            transform: none;
                        }
                    }
                    &.step01 {
                        top: 20px;
                        left: 24px;
                        animation: fadein 1s 0s ease both;
                    }
                    &.step02 {
                        bottom: 14px;
                        left: 242px;
                        animation: fadein 1s 1s ease both;
                    }
                    &.step03 {
                        top: 20px;
                        left: 496px;
                        animation: fadein 1s 2s ease both;
                    }
                    &.step04 {
                        bottom: 14px;
                        right: 240px;
                        animation: fadein 1s 3s ease both;
                    }
                    &.step05 {
                        top: 20px;
                        right: 22px;
                        animation: fadein 1s 4s ease both;
                    }
                    p:first-child {
                        color: #333;
                        font-size: 16px;
                    }
                }
            }
        }
        .service-process {
            margin-top: 20px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                margin-bottom: 30px;
            }
            .workflow-stage {
                display: flex;
                .stage {
                    color: #666;
                    width: 270px;
                    height: 354px;
                    background: #fff;
                    border-radius: 8px;
                    margin-right: 40px;
                    padding: 60px 44px 0;
                    position: relative;
                    z-index: 0;
                    text-align: center;
                    box-shadow: 0px 1px 25px 1px rgba(204, 204, 204, 0.3);
                    &:after {
                        display: block;
                        content: url('../assets/img/home/scroll.gif');
                        width: 78px;
                        height: 30px;
                        position: absolute;
                        right: -78px;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: -1;
                    }
                    &:last-child {
                        margin-right: 0px;
                        &:after {
                            display: none;
                        }
                    }
                    i {
                        color: #F63;
                        font-size: 56px;
                    }
                    span {
                        display: block;
                        width: 46px;
                        height: 2px;
                        background: #e5e5e5;
                        margin: 24px auto 48px;
                    }
                    .tip {
                        color: #333;
                        font-size: 16px;
                    }
                    .desc {
                        line-height: 28px;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                }
            }
        }
        .successful-case {
            margin-top: 20px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                margin-bottom: 30px;
            }
            .case-list {
                display: flex;
            }
            .case {
                width: 270px;
                height: 354px;
                border-radius: 8px;
                float: left;
                margin-right: 40px;
                text-align: center;
                position: relative;
                font-size: 20px;
                overflow: hidden;
                &.case01 {
                    background: url('../assets/img/home/fir.png');
                }
                &.case02 {
                    background: url('../assets/img/home/sec.png');
                }
                &.case03 {
                    background: url('../assets/img/home/thir.png');
                }
                &.case04 {
                    background: url('../assets/img/home/fo.png');
                }
                &:hover {
                    p {
                        font-size: 26px;
                        top: 100px;
                        transition: all 0.4s linear;
                    }
                    button {
                        bottom: 100px;
                        transition: all 0.4s linear;
                    }
                }
                &:last-child {
                    margin-right: 0px;
                }
                p {
                    color: #fff;
                    position: absolute;
                    top: 167px;
                    left: 0;
                    right: 0;
                }
                button {
                    position: absolute;
                    bottom: -54px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 160px;
                }
            }
        }
        .expert-opinion {
            margin-top: 20px;
            min-height: 450px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                margin-bottom: 30px;
            }
            .expert-list {
                display: flex;
                justify-content: center;
                .expert {
                    width: 104px;
                    height: 104px;
                    margin: 0px 25px;
                    border-radius: 52px;
                    border: 2px solid #fff;
                    background: #fff;
                    cursor: pointer;
                    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    &.on {
                        transform: scale(1.2);
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                        transition: all 300ms linear;
                    }
                    img {
                        width: 100px;
                        height: 100px;
                    }
                }
            }
            .expert-conent {
                width: 810px;
                margin: auto;
                text-align: center;
                .desc {
                    margin: 40px auto;
                    line-height: 34px;
                    color: #666;
                }
                .img {
                    width: 126px;
                    height: 36px;
                    margin: auto;
                }
                .job {
                    margin: 20px auto;
                }
            }
        }
        .cooperation-list {
            background: #fff;
            padding-bottom: 50px;
            .title {
                font-size: 28px;
                line-height: 50px;
                text-align: center;
                padding: 50px 0px;
            }
            .img-list {
                display: flex;
                flex-wrap: wrap;
                .img {
                    width: 20%;
                    text-align: center;
                    margin-bottom: 40px;
                }
            }
        }
    }
</style>
