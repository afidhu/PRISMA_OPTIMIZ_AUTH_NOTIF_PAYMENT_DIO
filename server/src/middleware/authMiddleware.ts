import type { Response, Request, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { jwt_secret, prisma } from "../index.ts"


export const authMiddleware = async (req: Request, resp: Response, next:NextFunction)=>{
    const mytoken =req.headers.authorization
    console.log(`mytoken are :${mytoken}`)

    if(mytoken){
    const tokenSend=mytoken.split(' ')[1];
        const {userId} =jwt.verify(tokenSend,jwt_secret) as any

        const authenticatedUser = await prisma.user.findFirst({
            where:{
                id:userId
            }
        })
        if(authenticatedUser){

            req.body =authenticatedUser
            next()

        }
        else{
            return resp.status(403).json("user doest not exist")

        }

    }else{
        return resp.status(403).json("unauthorized")

    }
}