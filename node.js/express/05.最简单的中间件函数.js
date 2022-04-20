const express = require('express')
const app = express()

// 定义一个简单的中间件函数
const mw = (req, res, next) => {
    console.log('这是最简单的中间件函数');
    next()
}

app.use(mw)

app.get('/',(req, res) => {
    console.log('调用了 / 这个路由');
    res.send('Home page')
})

app.listen(80, () => {
    console.log('http://localhost');
})