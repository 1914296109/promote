//  1.导入
const express = require('express')
//  2.创建 web 服务器
const app = express()

app.use(express.static('../test'))
app.use('/express',express.static('../express'))

//  3.启动 web 服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})