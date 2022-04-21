// 1. 导入 express
const express = require('express')
// 2. 创建 服务器 实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 定义jsonp接口
app.get('/api/jsonp',(req, res) => {
    // 1. 获取客户端发送的回调函数名字
    const funcName = req.query.callback 
    // 2. 取到要传递给客户端的数据
    const data = {name: 'dabai',age: 18}
    // 3. 根据名字和数据拼接一个字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 讲字符串响应给客户端的<script>标签解析
    res.send(scriptStr)
})

// 定要在路由之前，配置cos这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())
// 导入路由模块
const router = require('./16.apiRouter')
// 挂载路由
app.use('/api',router)

// 3. 启动服务器
app.listen(8080, () => {
    console.log('ok');
})