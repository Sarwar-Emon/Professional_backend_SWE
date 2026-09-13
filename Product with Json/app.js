const express = require('express')
const app= express();

const PORT= 3000;

app.use(express.json());

//Audit Logger 
const auditLogger= require('./middleware/auditLogger');
app.use(auditLogger);

const {isValid, checkUserAgent}= require('./middleware/isValid');
app.use(isValid, checkUserAgent);


// Product Router import
const productRoute= require('./route/productRoute')

// Product Route connect 
app.use('/api/products', productRoute)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});