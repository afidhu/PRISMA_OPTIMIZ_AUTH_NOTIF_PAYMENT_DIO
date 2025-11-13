
import type { Response, Request } from "express"
import { prisma } from "../index.ts"







///////////|||||||||PAGENATION (offset, cursor based) |||||||//////////////

// export const getpage = async (req: Request, resp: Response)=> {

//     try {
//         const results = await prisma.post.findMany({
//             skip:4,
//             take:10
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


/////////////NB, in CURSOR, here take page from the no specified, NOT as in skip, means skip from//////////////// 
export const getpage = async (req: Request, resp: Response)=> {

    try {
        const results = await prisma.post.findMany({
           cursor:{
            id:13
           },
            take:5
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}