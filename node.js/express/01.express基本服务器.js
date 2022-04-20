//  1.导入
const express = require('express')
//  2.创建 web 服务器
const app = express()

app.get('/',(req, res) => {
    res.send('请求成功')
})

app.get('/user',(req, res) => {
    res.send(req.query)
})

app.get('/:id',(req, res) => {
    res.send(req.params)
})
//  3.启动 web 服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})