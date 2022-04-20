const express = require('express')
const app = express()

// 1.导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({extended:false}))

app.get('/',(req, res) => {
    // 在服务器，可以使用reg.body这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则reg.body默认等于undefined
    console.log(req.body);
    res.send('请求成功')
})


app.listen(80, () => {
    console.log('http://localhost');
})