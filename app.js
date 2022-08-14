const express=require('express')
const appError=require('./utility/appError')
const app=express()
const accountRout=require('./Routs/accountRout')
const userRout=require('./Routs/userRout')
const categoryRout=require('./Routs/categoryRout')
const serviceRout=require('./Routs/serviceRout')
const orderRout=require('./Routs/orderRout')
const orderstatusRout=require('./Routs/orderstatusRout')
const transactionRout=require('./Routs/transactionRout')

app.use(express.json())

app.use('/api/users',userRout)
app.use('/api/accounts',accountRout)
app.use('/api/categories',categoryRout)
app.use('/api/services',serviceRout)
app.use('/api/orders',orderRout)
app.use('/api/orderstatus',orderstatusRout)
app.use('/api/transactions',transactionRout)

app.all('*',function(req,res,next){
  next(new appError("Not page ! ", 404));
})

app.use((err,req,res,next)=>{
  err.status = err.status || "Fail";
  err.statusCode = err.statusCode || 404;
  err.message = err.message || "Not found !";

  if (process.env.NODE_CODE === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      status: err.status,
      statusCode: err.statusCode,
      message: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_CODE === "PRODUCTION") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
})
module.exports=app