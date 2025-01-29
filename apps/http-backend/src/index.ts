import express from 'express';
import jwt from 'jsonwebtoken';

import { JWT_SECERT } from "@repo/backend-common/config";
import { CreateUserSchema } from "@repo/common/types";
const app = express();

app.post("/signup",(req,res)=>{

    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect details"
        })
        return;
    }
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