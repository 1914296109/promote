const express = require('express')
const app = express()

const router = require('./03.router')

// 挂载路径前缀
app.use('/api',router)

app.listen(80, () => {
    console.log('http://localhost');
})