# mgi-cloud-learn-lib

## 一、开发模式：
### 1.安装依赖
```
yarn 
```

### 2.本地启动
```
yarn serve
```

## 二、本地link模式：
### 1.打包组件
```
yarn lib
```

### 2.启动连接
```
yarn link
```
### 3.连接库
到目标项目录执行
```
yarn link mgi-cloud-learn-lib
```
### 4.目标项目引用
```JavaScript
import mgiCloudLearnLib from 'mgi-cloud-learn-lib'
Vue.use(mgiCloudLearnLib)
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
