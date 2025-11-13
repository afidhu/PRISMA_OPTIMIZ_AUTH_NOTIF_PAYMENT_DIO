
import type { Response, Request } from "express"
import { prisma } from "../index.ts"

export const addpost = async (req: Request, resp: Response) => {

    try {
        // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
        const userList = [{ title: "ashagmaico", content: "asha1", published: false, authorId: 1 }, { title: "juma.com1", content: "juma1", published: true, authorId: 2 }, { title: "ashagmaico2", content: "asha2", published: false, authorId: 4 }, { title: "juma.com2", content: "juma2", published: true, authorId: 5 },]
        const results = await prisma.post.createMany({
            data: userList
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}






///|||||||||||||||||||RELATION FILTER QUERY//////(is, isnot,) THIS FOR MANY ===> ONE, ONE ==>ONE ,relations||||||||||||||||||||||||||||||||||||

// export const getpost = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.post.findMany({
//            where:{
//                 author:{
//                     isNot:{
//                         name:'juma'
//                     }
//                 }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


// export const getpost = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.post.findMany({
//            where:{
//                 author:{
//                     isNot:{
//                         name:'juma'
//                     },
//                     is:{
//                         phone:{
//                             equals:12345
//                         }
//                     }
//                 }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }



// export const getpost = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.post.findMany({
//            where:{
//                 author:{
//                     isNot:{
//                         name:'juma'
//                     },
//                     is:{
//                         email:{
//                             startsWith:"ju"
//                         }
//                     }
//                 }
//            },
//            include:{
//             author:true
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


export const getpost = async (req: Request, resp: Response) => {

    try {
        const results = await prisma.post.findMany({
            where: {
                author: {
                    isNot: {
                        name: 'juma'
                    },
                    is: {
                        email: {
                            startsWith: "ju"
                        }
                    }
                }
            },
            select: {
                author: true,
                content: true
            }

        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}





//////////////////////////TRANSACTION SIMPLE ONE||||||||||||||


// export const addpost2 = async (req: Request, resp: Response) => {
//   try {
//     const [user, post] = await prisma.$transaction([
//       prisma.user.create({
//         data: {
//           name: req.body.name,
//           email: req.body.email,
//         },
//       }),
//       prisma.post.create({
//         data: {
//           title: req.body.title,
//           content: req.body.content,
//           published: false,
//           userId: req.body.userId, // ensure relation is set
//         },
//       }),
//     ])

//     resp.status(200).json({ user, post })
//   } catch (error) {
//     return resp.status(500).json(`error at: ${error}`)
//   }
// }


// export const adduser2 = async (req: Request, resp: Response) => {
//     try {
//             const mytransaction =await prisma.$transaction(async(tx)=>{
//         const result1 = await tx.user.create({})
//         const result2 = await tx.user.create({})
//         const result3 = await tx.user.update({})


//         return {result1, result2, result3}

//     })
//    resp.status(200).json(mytransaction)
//     } catch (error) {
//          return resp.status(500).json(`error at: ${error}`)
//     }

// }
