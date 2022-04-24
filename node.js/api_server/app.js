const express = require('express')
const app = express()


app.use(express.urlencoded({extended:false}))
const cors = require('cors')
app.use(cors())

const userRouter = require('./router/user.js')
app.use('/api',userRouter)


app.listen('3007', () => {
  console.log('api serve running at http://127.0.01:3007');
})