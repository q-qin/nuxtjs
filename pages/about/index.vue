<template>
    <div id="about">
        <div class="about-left">
            <el-menu :default-active="activeIndex" router>
                <el-menu-item index="/about">
                    <template slot="title">
                        <span slot="title">平台介绍</span>
                        <i class="el-icon-arrow-right"></i>
                    </template>
                </el-menu-item>
                <el-menu-item index="/about/2">
                    <template slot="title">
                        <span slot="title">需求方规范</span>
                        <i class="el-icon-arrow-right"></i>
                    </template>
                </el-menu-item>
                <el-menu-item index="/about/3">
                    <template slot="title">
                        <span slot="title">服务方规范</span>
                        <i class="el-icon-arrow-right"></i>
                    </template>
                </el-menu-item>
                <el-menu-item index="/about/4">
                    <template slot="title">
                        <span slot="title">交易规则</span>
                        <i class="el-icon-arrow-right"></i>
                    </template>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="about-right">
            <nuxt-child></nuxt-child>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: ''
            };
        },
        watch: {
            $route: function () {
                this.activeIndex = this.$route.path;
            }
        },
        methods: {},
        mounted() {
            this.activeIndex = this.$route.path;
        }
    };
</script>

<style lang="scss" scoped>
    #about {
        width: 1200px;
        margin: 20px auto;
        display: flex;
        .about-left {
            width: 210px;
            .el-menu-item {
                border-bottom: 1px solid #dbdbdb;
                span{
                    width: calc(100% - 20px);
                    display: inline-block;
                }
            }
        }
        .about-right {
            flex: auto;
            margin-left: 40px;
            border: 1px solid #0B95F9;
        }
    }
</style>
