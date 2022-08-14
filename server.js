const app=require('./app')
require('dotenv').config({path:'./config.env'})
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{}).then(()=>{
  console.log('Databasega ulanish hosil qilindi !')
})

app.listen(process.env.PORT,()=>{
  console.log(`${process.env.PORT} port sizni tinglamoqda !`)
})