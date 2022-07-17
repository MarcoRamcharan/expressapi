const express = require('express')
const app = express()
const users = require('./users')

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/users', (req, res)=>{
    res.json(users)
})

/*app.get('/users/:id', (req, res)=>{
    const id = req.params.id - 1
    res.send(users[id])
})*/

app.listen( process.env.PORT || 3000, ()=>{
    console.log('server running')
})