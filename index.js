const express = require('express')
const app = express()
app.get('/',(req,res) => {
    res.send('home page')
    console.log("home page")
})
app.get('/main', (req,res)=>{
    res.send('main page')
    console.log("main page")
})
app.get('/api', (req,res)=>{
    res.send('api page')
    console.log(" api page")
})
app.listen(5000, () => {
    console.log("server started in port 5000")
})
