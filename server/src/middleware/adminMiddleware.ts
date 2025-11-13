import type { Response, Request, NextFunction } from "express"



export const adminMiddleware = async (req: Request, resp: Response, next:NextFunction)=>{

    const user = req.body
    if(user.name === 'john'){
            next()
    }

    else{
        return resp.status(403).json("not unauthorized as admin")

    }
}