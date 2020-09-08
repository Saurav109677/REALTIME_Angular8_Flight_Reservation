const express = require('express')
const port=process.env.PORT || 9000

const app=express()

app.use(express.static('dist/Angular'))

app.listen(port,()=>{
    console.log("Server is up running on port",port);
})