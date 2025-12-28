
import express from "express";
import dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";
import authRouter from './router/authRouter.ts'
import postRouter from './router//postRouter.ts'
import aggregatefunctionRouter from './router/aggregatefunctionRouter.ts'
import pagenationRouter from './router/pagenationRouter.ts'
import auth2Jwt from './router/auth2JwtRouter.ts'

import app_router from './push_notfication/routers/app_router.ts'
import paymentRoute from "./stripe_payments/paymentRoute.ts";

dotenv.config()

export const app = express()

export const prisma =new PrismaClient()

const port = process.env.PORT || 3000;
export const jwt_secret =process.env.JWT_SECRET!
app.use(express.json())


//////THIS FOR PUSH NOTIFICATION////////////

app.use('/',app_router)
////////////////////////



app.use('/post',postRouter)
app.use('/user',authRouter)
app.use('/aggregate',aggregatefunctionRouter)
app.use('/page',pagenationRouter)
app.use('/auth2',auth2Jwt)


// stripe payment route
app.use('/payment', paymentRoute)


app.listen(port, ()=>{
    console.log(`server runing on port ${port}`)
})
