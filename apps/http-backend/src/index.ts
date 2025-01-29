import express from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECERT } from "./config";

const app = express();

app.post("/signup",(req,res)=>{
    //dbcall
    res.json({
        userId:"123"
    })
    
})
app.post("/signin",(req,res)=>{
    const userId = 1;
    const token = jwt.sign({
        userId,
    },JWT_SECERT)

    res.json({
        token
    })
    
})
app.post("/room",(req,res)=>{
    
})
app.listen(3003);