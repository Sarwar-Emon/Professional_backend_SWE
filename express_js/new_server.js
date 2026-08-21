const express = require('express')
const app= express()
const axios= require('axios')
const studentData=
{
    name: 'sayem sarwar',
    age: 29,
    city:'Noakhali'
}

//GET = Client/browser asks to GET something from the server.


app.get('/user', function(req, res){
    const url = 'http://127.0.0.1:3000/student'
    axios.get(url)
    .then(response=> {
        console.log(("Response:", response.data));
    })
    .catch(error => {
        console.log("Error fetching data: ", error.message);
    })
    res.send("Ok")
})


app.listen(4000)     