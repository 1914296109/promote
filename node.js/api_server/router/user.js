const express = require('express')
const router = express.Router()

const user_handler = require('../router_headler/user')

// 注册
router.post('/reguser', user_handler.reguser)

// 登录
router.post('/login', user_handler.login)

module.exports = router