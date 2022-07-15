
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

### 4. 完成非路由组件Hesder与Footer业务

项目开发流程：
1. 书写静态页面
2. 拆分组件
3. 获取服务器的数据动态展示
4. 完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构 + 组件样式 + 图片资源

注意2：本项目采用less样式，浏览器不识别less样式，需要通过less、less-loader进行处理，使之成为浏览器可以识别的css样式。

注意3：如果想让组件识别less样式，需要在style标签的身上加上lang=less

使用组件的步骤（非路由组件）：
1. 创建或者定义
2. 引入
3. 注册
4. 使用

### 5. 路由组件的搭建

安装插件 vur-router

* components文件夹：一般放置非路由组件（全局共享组件）
* pages/views文件夹：一般放置路由组件

**配置路由：**

项目当中配置路由一般放置在router文件夹中

**总结：**

路由组件与非路由组件的区别？
* 路由组件一般放置在pages/views文件夹，非路由组件一般放置compons文件夹中
* 路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用
* 注册完路由，不管路由组件、还是非路由组件身上都有$router、$route属性

`$route`: 一般获取路由信息（路径、query、params等等）

`$router`: 一般进行编程式导航进行路由跳转（push/replace）

**路由的跳转：**

路由的跳转有两种形式：
* 声明式导航router-link
* 编程式导航push/replac

编程式导航：声明式导航能做的，编程式导航都可以，但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑。

