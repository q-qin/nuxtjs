# # 基于nuxt vue.js PC门户页面

## 技术栈

nuxt + nodejs + vue.js + vuex + axios + mock

## 安装说明

```js
npm install

npm run dev

npm run build
```

## 2019-0926 新增

1.使用`proxyTable`解决跨域问题

2.使用`axios`作为接口拦截

3.特别注意：需要覆盖的样式，全局样式写在app.vue中，局部样式新增
```html
<style lang="scss" scoped> ... </style> 
```
4.`api`接口使用方法
```js
// api/index.js (*注：get请求一定要用对象包裹，不然axios捕获不到)
export const Foo = params=>request.post('/App/Foo', params)
export const Foo = params=>request.get('/App/Foo', {params:params})

// 调用的地方
import {Foo} form '@/api'
async test(){
    let res = await Foo({a:1})
    if(res.status === 'y'){
        then ...
    }
}
test()
```

## 2019-1009 新增

1.加入mock-server，当然你也可以使用[easy-mock](https://www.easy-mock.com)

``` js
//使用方法
npm run mock
//默认端口4000
```

2.封装了交互弹框

``` js
// 使用方法
this.$layer.alert(message,options,ok=>{});
this.$layer.confirm(message,options,ok=>{},no=>{});
this.$toast(message,options);
this.$loading(message,options);
this.$loaded();
```  

## 2019-1012 新增

1.推荐使用`scss`

2.全局混入`mixin.scss`

3.写了2个常用的less内置函数，定义了主色的全局变量`$mcolor:#f63`
  
``` css
// 使用方法
  
color:$mcolor;

@include wh($width, $height:auto);
// 编译为↓
width:$width;
height:$height //(*注:$height不传为auto)

@include bis($url);
// 编译为↓
background-image: url($url);
background-repeat: no-repeat;
background-position: center center;
background-size: 100% 100%;
```

## 2019-11-22 新增
1.新增bus方法

``` js
/**
 * 使用方式
 * Vue.use(Bus)
 * this.$bus('eventName', id);
 * 
 * bus: {
 *  eventName(id) {
 *    console.log(id);
 *  }
 * }
 */
```

2.新增图片预览组件 

``` js
// 使用方法
const glary = new Viewer(document.getElementById('images'));
```

3.新增文件上传组件nvUploader

``` js
// 使用方法
import nvUploader from '@/components/nvUploader.vue';

components: {
    nvUploader
},

<nv-uploader 
    target="/Common/UploadHandler.ashx?path=ht"
    ref="uploader"
    @start="startUpload" 
    @finish="finishUpload" 
    @progress="progress"
    :maxSize="5*1024*1024"
    :maxCount="3"
    @error="error"
></nv-uploader>

```

## 2019-11-26 新增
1.新增图片裁剪组件 nvCropper

``` js
// 使用方法
import nvCropper from '@/components/nvCropper.vue';

components: {
    nvCropper
},

<nv-cropper 
    ref="cropper"
    target="/Common/UploadHandler.ashx?path=ht" 
    @start="onStart" 
    @finish="onFinish"
></nv-cropper>

```

2.新增分页组件nvPaging

``` js
// 使用方法
import nvPaging from '@/components/nvPaging.vue';

components: {
    nvPaging
},

<nv-paging 
    ref="paging"
    :page-index="currentPage" 
    :total="count" 
    :page-size="pageSize" 
    @change="pageChange"
></nv-paging>

```

## 2019-11-28 新增
1.日期时间选择控件 nvDatePicker

``` js
// 使用方法
import datePicker from '@/components/nvDatePicker.vue';

components: {
    datePicker
},
// type 不传默认日期选择，type:min 时间选择
:limit=[{
    type: 'fromto', // 从开始到结束，可为空
    from:'2019-11-11',
    to:'2019-11-30'
},{
    type: 'weekday',   // 只可选星期12345
    available: [1, 2, 3, 4, 5] 
}]
<date-picker :date="date" type="min" ></date-picker>
// *注 limit之后，上一月下一月还有bug，后期用到limit功能再调吧
```

## 2019-12-04 新增
1.页面过渡效果，keepalive按需使用

``` jsx
    <transition name="fade" mode="out-in">
    <!-- <keep-alive> -->
        <router-view></router-view>
    <!-- </keep-alive> -->
    </transition>

    /* 页面过渡效果，可自定义 */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 100ms;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
```

2.弹框登录

## 2020-01-09 二维码动态生成弹框 使用案例--合作智客
## 2020-01-09 面包屑 使用案例 --新闻资讯

## 2020-1-21 新增模态框组件
```js
<nv-popup class="popup" ref="pop" title="申请变更">
    
</nv-popup>

 this.$refs.pop.show = true;

```
