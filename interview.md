## 1.路由跳转传递参数（对象写法）path是否可以结合params参数一起使用？

路由跳转传参的时候，对象的写法可以是name、path形式，但需要注意的是，path这种写法不能与params参数一起使用。

## 2.如何指定params参数可传可不传？

配置路由的时候，在占位的后面加一个问号。

## 3.params参数可以传递也可以不传递，如果传递是空串，如何解决？

使用undefined解决，params参数可以传递、不传递（空的字符串）

## 4.路由组件能不能传递props数据？

布尔值写法：可以传递params参数

```js
props: true
```

对象写法：额外传递给路由组件一些props参数

```js
props: {a: 1, b: 2}
```

函数写法：可以传递params参数、query参数，通过props传递给路由组件

```js
props: ($route) => {
    return {
        keyword: $route.params.keyword,
        k: $route.query.k,
    }
}
```

## 编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated警告错误？

声明式导航没有这类问题，因为vue-router底层已经处理好了

