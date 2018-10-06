# 图片懒加载

图片懒加载是很多门户网站会用到的功能，一个网页的图片不需要在网页一开始就全部加载，可以延迟到图片出现在浏览器的可视框内时再去加载，用户体验会更好一些。

好处有如下：

1. 节省用户流量
2. 减轻服务器压力
3. 浏览器可以更快响应触发`window.onload`事件

## 图片懒加载的逻辑

1. 把所有需要懒加载的图片的src设置为加载中的显示图
2. 把所有需要懒加载的图片的data-src设置为真正图片的URL
3. 监听`window.onscroll`事件，并遍历所有的图片，如果图片在可视窗口的范围内则把src替换为data-src
4. 因为`window.onscroll`事件会频繁触发，导致回调频繁触发，我们可以用防抖的方式优化

## 如何使用

### 安装：

```cmd
npm i my-lazyload-picture --save
```

### 引用：

```JavaScript
// CommonJS
const {initLazyPicture, lazyPicture} = require('my-lazyload-picture')
```

### API：

```JavaScript
/**
 * 懒加载的初始化工作
 * @param {*} selector 选择器，默认为所有img标签
 * @param {*} tempSrc 存放在dataset的键，默认为data-src
 * @param {*} loadingPitureURL 加载完成前的图片URL
 * @param {*} realPitureURLArray 真实图片URL数组
 */
function initLazyPicture(selector = 'img', tempSrc = 'src', loadingPitureURL, realPitureURLArray){...}

/**
 * 让img标签拥有懒加载功能
 * @param {String} selector 选择器，默认为所有img标签
 * @param {Number} awayFromInnerHeightBottom 距离可视窗口底部距离，默认为0
 * @param {String} tempSrc data-*中，*代表的字符串，默认为data-src
 * @param {Number} interval 防抖设计中的时间间隔，默认为150毫秒
 */
function lazyPicture(selector = 'img', awayFromInnerHeightBottom = 0, tempSrc = 'src', interval = 150){...}
```

## 演示地址

[codepen-图片懒加载](https://codepen.io/coconilu/pen/qJaXRW)

也可以用浏览器打开test/test.html