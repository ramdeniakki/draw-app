import { JWT_SECERT } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export function middleware(req:Request,res:Response,next:NextFunction){
    const token = req.headers["authorization"] ?? ""
    const decoded = jwt.verify(token,JWT_SECERT)

    if(decoded){
        //@ts-ignore
        req.userID = decoded.userID;
        next()
        
    }else{
        res.status(403).json({
            message:"UnAuthorized"
        })
    }
}