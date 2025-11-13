
import type { Response, Request } from "express"
import { prisma } from "../index.ts"




//////////////||||||||||||AGGREGATIONS FUNCTIONS(sum, count, avg,min, max,)|||||||||||||||||||||




// export const aggregatefunctions = async (req: Request, resp: Response) => {
//     try {

//         const results = await prisma.post.aggregate({
//             _sum:{
//                 comments:true
//             },
//             _avg:{
//                 comments:true
//             },
//             _count:{
//                 comments:true
//             },
//             _max:{
//                 comments:true
//             },
//             _min:{
//                 comments:true
//             },
//             // where:{
//             //     authorId:2
//             // }

//         })
//         return resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }





//////////////////////////////GROUBDEDBY////////////


// export const aggregatefunctions = async (req: Request, resp: Response) => {
//     try {

//         const results = await prisma.post.groupBy({
//             by:['authorId'],
//             _sum:{
//                 comments:true
//             },
//             _avg:{
//                 comments:true
//             },
//             _count:{
//                 comments:true
//             }

//         })
//         return resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }




///////////////||||||SORT (asc,desc) ||||||||||||||||||///


export const aggregatefunctions = async (req: Request, resp: Response) => {
    try {

        const results = await prisma.post.findMany({
            orderBy:{
                comments:"asc"
            }
        })
        return resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}
