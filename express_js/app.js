const express = require('express')
const app= express()

const studentData=
{
    name: 'sayem sarwar',
    age: 29,
    city:'Noakhali'
}

//GET = Client/browser asks to GET something from the server.
app.get('/home', function(req, res)
{
    res.send('Hello Sayem')
})

app.get('/user', function(req, res){
    res.send('This is user route')
})
app.get('/student', function(req, res){
    console.log(req.query.id);
    res.json(studentData)
})

app.listen(3000)     