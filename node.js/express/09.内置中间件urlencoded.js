const express = require('express')
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过express.urlencoded()这个中间件，解析表单中的JSON格式的数据
app.use(express.urlencoded({extended:false}))
app.get('/',(req, res) => {
    // 在服务器，可以使用reg.body这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则reg.body默认等于undefined
    console.log(req.body);
    res.send('请求成功')
})


app.listen(80, () => {
    console.log('http://localhost');
})