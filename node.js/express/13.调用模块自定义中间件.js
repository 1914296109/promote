// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

const bodyParser = require('./12.封装自定义中间件函数')

// 这是解析表单数据的中间件
app.use(bodyParser)

app.get('/',(req, res) => {
    res.send(req.body )
})


app.listen(80, () => {
    console.log('http://localhost');
}) 