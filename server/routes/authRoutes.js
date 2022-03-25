const express = require('express');

const authRouter = express.Router();

authRouter.route('/').get((req,res)=>{
    res.status(200).json({
        message:'hello auth'
    })
})

module.exports = authRouter;