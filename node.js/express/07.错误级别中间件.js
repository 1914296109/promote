const express = require('express')
const app = express()



app.get('/',(req, res) => {
    throw new Error('系统异常')
    res.send('/' + req.startTime)
})

// 错误级别中间件必须定义在所有路由后面
app.use((err, req, res, next) => {
    res.send('Error:' + err.message)
})

app.listen(80, () => {
    console.log('http://localhost');
})