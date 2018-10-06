exports = { initLazyPicture, lazyPicture }

/**
 * 懒加载的初始化工作
 * @param {*} selector 选择器，默认为所有img标签
 * @param {*} tempSrc 存放在dataset的键，默认为data-src
 * @param {*} loadingPitureURL 加载完成前的图片URL
 * @param {*} realPitureURLArray 真实图片URL数组
 */
function initLazyPicture(selector = 'img', tempSrc = 'src', loadingPitureURL, realPitureURLArray) {
  let nodes = Array.from(document.querySelectorAll(selector))
  nodes.forEach((node, index) => {
    node.src = loadingPitureURL
    nodes[index].dataset[tempSrc] = realPitureURLArray[index]
  })
}

/**
 * 让img标签拥有懒加载功能
 * @param {String} selector 选择器，默认为所有img标签
 * @param {Number} awayFromInnerHeightBottom 距离可视窗口底部距离，默认为0
 * @param {String} tempSrc data-*中，*代表的字符串，默认为data-src
 * @param {Number} interval 防抖设计中的时间间隔，默认为150毫秒
 */
function lazyPicture(selector = 'img', awayFromInnerHeightBottom = 0, tempSrc = 'src', interval = 150) {
  let nodes = document.querySelectorAll(selector)
  let innerHeight = window.innerHeight
  let index = 0
  let timeout
  window.addEventListener('scroll', onscroll = () => {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      while (index < nodes.length) {
        let node = nodes[index]
        if (node.getBoundingClientRect().top <= innerHeight + awayFromInnerHeightBottom) {
          node.src = node.dataset[tempSrc]
          index++
          if (index >= nodes.length) window.removeEventListener('scroll', onscroll)
        } else {
          break
        }
      }
    }, interval)
  })
}
