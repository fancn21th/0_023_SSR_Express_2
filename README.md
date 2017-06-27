# 基础架构指南 

## 目录
- [语言](#语言)
- [技术栈](#技术栈)
  - [客户端](#客户端)
  - [服务端](#服务端)
- [编程与架构思想](#编程与架构思想)
- [文件组织结构](#文件组织结构)
  
## 语言
* [HTML5](https://www.w3schools.com/html/html5_intro.asp)
* [CSS3](https://www.w3schools.com/css/css3_intro.asp)
* [ES6](https://github.com/lukehoban/es6features#readme)

## 技术栈
### 客户端

### 服务端
* [Node.js](https://nodejs.org/dist/latest-v6.x/docs/api/)
* [Express](https://expressjs.com/)
* [handlebarsjs](http://handlebarsjs.com/) Logic-less template engines over Template engines with logic

## 编程与架构思想
* [函数式 编程](https://en.wikipedia.org/wiki/Functional_programming)

## 文件组织结构

当前文件目录结构
```
.
├── docs                   # 架构与开发文档
├── helpers                # 帮助文件
├── node_modules           # 依赖包
├── public                 # 静态文件
│   ├── css                # 样式文件
│   └── img                # 图片文件
│   └── js                 # 脚本文件
├── routes                 # Express router 路由文件
├── views                  # Views 视图模板
└── app.js                 # 主程序入口文件
└── .editorconfig          # 编辑器设置文件
└── .eslintignore          # eslint 配置文件
└── .eslintrc              # eslint 配置文件
└── .gitignore             # git 配置文件
└── package.json           # npm 配置文件
└── README.md              # 帮助文档文件
```

## 脚本命令

|`npm run <script>`|描述|
|------------------|-----------|
|`start`|在本地启动程序|
|`build`|构建程序|
|`test`|执行测试|
|`test:coverage`|执行测试并输出覆盖率报告|
|`lint`|检查 JS 代码规范|
|`lint:fix`|检查 JS 代码规范并自动修复|
