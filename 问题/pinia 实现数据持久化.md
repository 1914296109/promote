# pinia 实现数据持久化

1. 下载插件

   ```node
   npm install pinia-plugin-persist
   ```

2. 根目录下创建 store/index.ts

   ```typescript
   import { createPinia } from 'pinia'
   import piniaPluginPersist from 'pinia-plugin-persist'
   
   const pinia = createPinia()
   
   pinia.use(piniaPluginPersist)
   
   export default pinia
   ```

3. 根目录下store/login/index.ts

   ```typescript
   import { defineStore } from 'pinia'
   
   export const userStore = defineStore('main', {
     state: () => {
       return {
         userInfo: {
           username: '',
           password: ''
         },
         token: ''
       }
     },
     // 开启持久化
     persist: {
       enabled: true, // 启用
       strategies: [
         // storage 可选localStorage或sessionStorage
         // paths 给指定数据持久化
         { key: 'user', storage: localStorage, paths: ['token', 'userInfo'] }
       ]
     },
     getters: {
     },
     actions: {
     }
   })
   
   ```

   

4. main.ts 导入 pinia 并使用 

   ```typescript
   import { createApp } from 'vue'
   import App from './App.vue'
   
   // 引入 Pinia 状态管理工具
   import pinia from './store'
   
   // 添加路由
   import router from './router'
   
   createApp(App)
   // 路由
     .use(router)
   // pinia
     .use(pinia)
   // 挂载
     .mount('#app')
   ```

   