### 1.全局引入

1. 安装 ant-design-vue

   ```node
   npm i --save ant-design-vue
   ```

2. main.js 引入

   ```typescript
   import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router/index'
   
   import Antd from 'ant-design-vue';
   import 'ant-design-vue/dist/antd.css';
   
   createApp(App)
   // 蚂蚁UI
   .use(Antd)
   // 路由
   .use(router)
   // 挂载到节点
   .mount('#app')
   ```



### 2.按需引入

1. 安装按需引入的插件

   ```typescript
   npm i unplugin-vue-components -D
   ```

2. vite.config.js 配置

   ```typescript
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import Components from 'unplugin-vue-components/vite'
   import {
     AntDesignVueResolver,
   } from 'unplugin-vue-components/resolvers'
   
   export default defineConfig({
     plugins: [
         vue(),
         Components({
           resolvers: [
             AntDesignVueResolver(),
           ],
         })
       ],
   })
   ```

3. 注意：使用的 Vite，你可以使用unplugin-vue-components来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：

   ```typescript
   import { message } from 'ant-design-vue';
   import 'ant-design-vue/es/message/style/css';
   ```