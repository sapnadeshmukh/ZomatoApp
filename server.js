const express=require('express')
const app=express()
app.use(express.json())
require('dotenv').config()

app.use('',require('./routes/index'))
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})