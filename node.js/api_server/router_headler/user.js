const db = require('../db/index')
// 登录
exports.login = (req, res) => {
  console.log(req.body);
  const userinfo = req.body
  // 判空
  if (!userinfo.username || !userinfo.password) {
    return res.send({status: 1, message: '用户名或密码不合法！'})
  }
  
  // sql语句
  const sqlStr = `select * from ev_users where username = ?`
  db.query(sqlStr,userinfo.username, (error, results) => {
    // if (error) {
    //   return res.send({status: 1,message: err.message})
    // }
    console.log(results);
    // 用户名被占用
    if(results && results.length > 0) {
      return res.send({status:1, message: '用户名被占用，请更换其他用户名！'})
    }
    
  })
  res.send({message:'login OK'})
} 

// 注册
exports.reguser = (req, res) => {
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    return res.send({status: 1, message: '用户名或密码不合法！'})
  }

  res.send({message:'reguser OK'})
}

