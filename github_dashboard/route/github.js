const express= require('express');
const router= express.Router();

const analyzeCommits= require('../utils/analyzeCommits');

router.get('/:owner/:repo/commits', async(req, res)=>{
    try{
    const {owner, repo}= req.params
    const result= await analyzeCommits(owner,repo);
    res.json(result);
    }
    catch (error){
        res.status(404).json({erro: error.message});
    }
})
module.exports= router