const express= require('express')
const app= express()

data ={
    
    'name':'sayem emon',
    'age': 29,
    'district':'Noakhali'
}

// GET -> browswer/client want to get something from  server
app.get('/home', function(req, res)
{
    res.send('This is sayem home page')
})

// query parameter
app.get('/student', function(req, res)
{
    console.log(req.query.id); // here is how query parameter works 
    res.json(data)
})

//  Router Parameter 

app.get('/student1/:id', function(req, res)
{
    console.log(req.params.id);
    res.send('Student ID is ' +req.params.id);
})

app.listen(3000)
