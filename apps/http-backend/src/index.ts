import { JWT_SECERT } from "@repo/backend-common/config";
import { CreateUserSchema } from "@repo/common/types";
import { prisma } from "@repo/db/client";
import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.post("/signup", async (req, res) => {
  const prasedData =   CreateUserSchema.safeParse(req.body);
  if (!prasedData.success) {
    res.json({
      message: "Incorrect details",
    });
    return;
    
  }
 try{

    await prisma.user.create({
        data: {
          email: prasedData.data?.username,
          password: prasedData.data.password,
          name: prasedData.data.name,
        },
      });

      res.json({
        userId:"123"
      })

 }
 catch(err){
   res.status(403).json({
    message:"User is Already  exist  this username"
   })
 }
   
  //dbcall
  res.status(200).json({
    userId: "123",
  });
});
app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECERT
  );

  res.json({
    token,
  });
});
app.post("/room", (req, res) => {});
app.listen(3003);
