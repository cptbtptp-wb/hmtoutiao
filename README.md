# hmtoutiao

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

var arr = [
{ id: 1, name: '吃饭' },
{ id: 2, name: '睡觉' },
{ id: 3, name: '打豆豆' },
]

      var arr1 = [{ id: 2, name: '睡觉' }]

      //   filter筛选 every 每一个要符合条件就是true,否则就是false
      console.log(
        arr.filter((item) => arr1.every((item1) => item1.id !== item.id))
      )



// 给页面上所有的元素绑定滚动事件
// 只要谁滚动 就打印出来
const list = document.querySelectorAll('\*')
list.forEach(item => {
item.onscroll = function (e) {
console.log(e.target)
}
})
