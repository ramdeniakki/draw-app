import jwt, { JwtPayload } from 'jsonwebtoken';
import { WebSocketServer } from "ws";
import { JWT_SECERT } from './config';
const ws = new WebSocketServer({port:8081})
ws.on("connection",function connection(ws,request){
   const url = request.url;
   if(!url){
    return
   }

   const qureyparasm = new URLSearchParams(url.split('?')[1]);
   const token = qureyparasm.get('token') || ""
//    const decode = jwt.Verify(token,JWT_SECERT)
//@ts-ignore  
const decoded  = jwt.verify(token,JWT_SECERT)

if(!decoded || !(decoded as JwtPayload).userId){

    ws.close();
    return;
}
    ws.on("message",function message(data){ 
        ws.send("pong")
    })
}) 