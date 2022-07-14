
## 准备工作

### 1. vue-cli脚手架初始化项目

node + webpack + 淘宝镜像

* node_modules文件夹：项目依赖文件夹

* public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源webpack进行打包的时候，会原封不动打包到dist文件夹中。

* src文件夹（程序员源代码文件夹）:

    * assets文件夹：一般也是放置静态资源（一般放置多个组件公用的静态资源），需要注意，放置在assets文件夹里面的静态资源，在webpack打包过程中，webpack会把静态资源当作一个模块，打包到JS文件里面。

    * components文件夹：一般放置的是非路由组件（全局组件）

    * App.vue：唯一的根组件，Vue当中的组件（.vue)

    * main.js：程序的入口文件，整个程序之中最先执行的文件

* babel.config.js：配置文件（babel相关）

* package.js：记录项目当中有哪些依赖，项目怎么运行

* package-lock.json：缓存性文件

* README.md：说明性文件

### 2. 项目的其他配置

* 在`npm run serve`之后，让浏览器自动打开

```js
// vue.config.js配置文件
devServer: {
open: true,
host: '192.168.2.21',
port: 8080
},
```

* 关闭eslint校验工具

```js
// vue.config.js配置文件
lintOnSave: false,
```

### 3. 项目路由分析

vue-router（前端路由所谓的键值对）
* key：url(地址栏中的路径)
* value：相应的路由组件

注意：项目上中下结构

路由组件：
* Home首页
* Search搜索
* Login登录
* Register注册

非路由组件：
* Header组件【都有】
* footer组件【首页、搜索页】，登录、注册页没有

