import express from 'express'
import router from './routes/user-routes.js'
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/public', express.static('public'))
app.use('/', router)

app.listen(5000, () => {
  console.log('SERVER RUNNING ON http://localhost:5000')
})
