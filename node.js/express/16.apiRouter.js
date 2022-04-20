const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    const query = req.query

    res.send({
        status: 0,
        mgs: 'GET 请求成功',
        data: query
    })
})

router.post('/post', (req, res) => {
    const query = req.body

    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data: query
    })
})

router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功'
    })
})

module.exports = router