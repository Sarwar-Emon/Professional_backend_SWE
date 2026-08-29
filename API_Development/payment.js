const express = require('express')
const router= express.Router()

router.get('/user/:id/payment', (req,res) => {
    const userId= req.params.id;
    const filter= req.query.filter
    console.log('Payment is done');
    res.send(`User Id: ${userId}, Filter: ${filter}`);})

module.exports= router;