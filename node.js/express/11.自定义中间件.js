// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入Node.js内置的querystring模块
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1. 定义一个str字符律，专门用来存储客户端发送过来的请求体数据
    let str = ''
    // 2. 监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        // 在 str 中存放的是完整的请求数据
        // console.log(str);
        // TODO： 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.get('/',(req, res) => {
    console.log(req.body);
    res.send(req.body )
})


app.listen(80, () => {
    console.log('http://localhost');
}) 