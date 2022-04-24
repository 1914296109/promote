// 1. 导入 express
const express = require('express')
// 2. 创建 服务器 实例
const app = express()

app.use('/login',express.static('./login.html'))
app.use('/home',express.static('./home.html'))

//配置 Session 中间件
const session = require('express-session')
app.use(session({
  secret: 'item',
  resave: false,
  saveUninitialized: true
}))

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 用于生成 JWT 字符串的包
const jwt = require('jsonwebtoken')
// 讲 JWT 字符串，解析还原成 JSON 对象的包
const { expressjwt } = require('express-jwt')
// 定义 secret 密钥
const secretKey = 'itheima No1 ^_^'

// 定要在路由之前，配置cos这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 只要配置了 expres-jwt 中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressjwt({secret:secretKey, algorithms:['HS256']}).unless({path: [/^\/api\//]}))


// 登录接口
app.post('/api/login',(req, res) => {
  // 判断信息是否正确
  if (req.body.username !== 'admin' && req.body.password !== '000000') {
    return res.send({status: 1,msg: '登录失败'})
  }

  req.session.userinfo = req.body
  req.session.islogin = true

  // 生成 JWT 字符串，通过 token 属性发给客户端
  // (1.用户对象信息 2.加密的密钥 3.配置对象，可配置 token 有效期)
  const tokenStr = jwt.sign({username: req.body.username},secretKey,{ expiresIn: '100s' })
  res.send({status: 0,msg:'登录成功',token: tokenStr })
})

// 获取用户名
app.get('/my/getUsername',(req, res) => {
  if (req.session.islogin) {
    return res.send({status: 1,mas: 'fail'})
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.userinfo.username
  })
})

// 获取用户信息
app.get('/my/getinfo',(req, res) => {
  console.log(req.auth);
  res.send({
    status: 0,
    msg: 'success',
    data: req.auth
  })
})

// 退出登录
app.post('/my/logout',(req, res) => {
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})

// 捕获解析 JWT 失败后产生的错误
app.use((err, req ,res, next) => {
  if(err.name === 'UnauthorizedError'){
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
  res.send({
    status: 500,
    message: '未知的错误'
  })
})

// 3. 启动服务器
app.listen(8080, () => {
    console.log('ok');
})