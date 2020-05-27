<template>
    <div id="member">
        <div class="member-search">
            <div class="search-content">
                <p>服务：</p>
                <p>全部</p>
                <p>关注数</p>
                <p>经验值</p>
            </div>
            <div class="search-content">
                <p>智客类型：</p>
                <p>全部</p>
                <p>人力资源</p>
                <p>财税咨询</p>
                <p>法务咨询</p>
                <p>企业管理</p>
            </div>
        </div>
        <div class="member-content">
            <div class="member-item" v-for="i in 12" :key="i">
                <div class="item-info">
                    <div class="image">
                        <img src="http://img2.shoudaozi.com/gxpt/Xq/20190827/20190827172215767240.jpg" width="100%" height="100%" alt="">
                    </div>
                    <div class="info">
                        <p class="name">
                            芦秀清 <i class="el-icon-location"></i><span>苏州</span>
                        </p>
                        <p>金融分析师</p>
                    </div>
                </div>
                <p class="privite">风险管理,理财规划,金融分析</p>
                <p class="helpnum">关注数: <span>2547</span>经验值: <span>9.5</span></p>
                <div class="look-over">
                    <p>查看</p>
                    <p class="show">
                        约聊
                        <img src="@/assets/img/qrcode_for_mp.jpg" alt="">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    #member {
        .member-search {
            background: #fff;
            .search-content {
                height: 60px;
                width: 1200px;
                display: flex;
                margin: 0px auto;
                align-items: center;
                p {
                    width: 100px;
                }
            }
            .search-content:first-child {
                border-bottom: 1px dashed rgba(229,229,229,1);
            }
        }
        .member-content {
            width: 1200px;
            margin: 40px auto 0px;
            display: flex;
            flex-wrap: wrap;
            .member-item {
                background: #FFF;
                width: 30%;
                padding: 20px;
                cursor: pointer;
                position: relative;
                border-radius: 8px;
                overflow: hidden;
                margin: 0px 40px 40px 0px;
                .item-info {
                    display: flex;
                    align-items: center;
                    .image {
                        width: 80px;
                        height: 80px;
                        img {
                            border-radius: 50%;
                        }
                    }
                    .info {
                        padding-left: 20px;
                        .name {
                            font-size: 16px;
                            font-weight: bold;
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
                    }
                }
                .privite {
                    padding: 20px 0px 10px;
                    border-bottom: 1px dashed rgba(229,229,229,1);
                }
                .helpnum {
                    padding-top: 10px;
                    span {
                        color: #F63;
                        padding-right: 5px;
                    }
                }
                .look-over {
                    position: absolute;
                    right: -50px;
                    top: 0px;
                    height: 100%;
                    background: #F63;
                    transition: 0.4s;
                    box-shadow: 0px 1px 25px 1px rgba(204,204,204,0.3);
                    p {
                        width: 50px;
                        height: 50%;
                        font-size: 16px;
                        line-height: 50px;
                        text-align: center;
                        color: #fff;
                        writing-mode: tb-rl;
                    }
                    p:first-child {
                        border-bottom: 1px solid #fff;
                    }
                    .show {
                        position: relative;
                        img {
                            width: 90px;
                            position: absolute;
                            top: 5px;
                            right: 50px;
                            display: none;
                        }
                    }
                    .show:hover {
                        img {
                            display: block;
                        }
                    }
                }
            }
            .member-item:hover {
                box-shadow: 0px 1px 25px 1px rgba(204,204,204,0.3);
                .look-over {
                    transform: translateX(-50px);
                }
            }
        }
    }
</style>
