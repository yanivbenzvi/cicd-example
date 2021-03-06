const express = require('express')
const port    = process.env.PORT || 4000
const app     = express()

console.log(process.env.PORT)
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/profile', (req, res) => {
    res.send('welcome to profile page')
})

app.listen(port, ()=>{
    console.log(`server is up and running at: http://127.0.0.1:${port}`)
})