import type { Response, Request } from "express"
import { jwt_secret, prisma } from "../index.ts"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const singup = async (req: Request, resp: Response) => {
    const { email, name, password, phone } = req.body
    try {
        const users = await prisma.user.create({
            data: {
                email: email,
                name: name,
                phone: phone,
                password: bcrypt.hashSync(password, 10)
            }
        })
        return resp.status(201).json(users)

    } catch (error) {
        return resp.status(500).json(`error internal ${error}`)
    }
}




export const login = async (req: Request, resp: Response) => {
    const { email, password } = req.body
    try {
        console.log(req.body)
        const users = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        console.log(users)
        if (users) {
            if (!bcrypt.compareSync(password, users.password!)) {
                return resp.status(404).json('Wrong Credential')
            } else {
                const token = jwt.sign(
                    {
                        userId: users.id
                    },
                    jwt_secret,{ expiresIn: '5s' }
                )

                return resp.status(200).json({ user: users, token: token })
            }

        } else {
            return resp.status(400).json('user not found')
        }

    } catch (error) {
        return resp.status(500).json(`error internal ${error}`)
    }
}


export const haslogged = async (req: Request, resp: Response) => {
    try {
        const users = await prisma.user.findFirst({
           where:{
            id:req.body.id
           },
           select:{
            password:false,
            name:true,
             email:true,
             phone:true
           }
        })

        if(users){
            return resp.status(200).json(users)
        }
        else{
            return resp.status(400).json('fail')
        }

    } catch (error) {
        return resp.status(500).json(`error internal ${error}`)
    }
}