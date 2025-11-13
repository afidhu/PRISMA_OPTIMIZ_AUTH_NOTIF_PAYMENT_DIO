import type { Response, Request } from "express"
import { prisma } from "../index.ts"




///////////////////CREATE QUERIES(create, createmanay,connectOrcreate, connect, relation create)///////////////////////
//||||NB, connct it connect with data exist in table specified, BUT, createOrconnct, if data specified found it connect if not it create new


//|||||||||||HERE CAN USE INTRERFACE

interface body{
name:String
email:String

}
// export const addUser = async (req: Request, resp: Response) => {

//     try {
//         // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
//         const userList = [ {email: "juma.com3", name: "juma3", phone: 73890 }]
//         const results = await prisma.user.createMany({
//             data: userList,
//             data: body,
//             skipDuplicates:true
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }



// export const addUser = async (req: Request, resp: Response) => {

//     try {
//         // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
//         const userList = [{ email: "juma.com3", name: "juma3", phone: 73890 }]
//         const results = await prisma.user.create({
//             data: {
//                 email: 'hassna@gmailcom',
//                 phone: 567890,
//                 name: 'hassan',
//                 posts: {
//                     createMany: {
//                         data: [
//                             {
//                             title: 'post1',
//                             comments: 8,
//                             content: "well"
//                         },
//                         {
//                              title: 'post2',
//                             comments: 15,
//                             content: "well2"
//                         }
//                     ],
                        

//                     }
//                 }
//             }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }




// export const addUser = async (req: Request, resp: Response) => {

//     try {
//         // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
//         const userList = [{ email: "juma.com3", name: "juma3", phone: 73890 }]
//         const results = await prisma.user.create({
//             data: {
//                 email: 'alex@gmailcom',
//                 phone: 567890,
//                 name: 'alex',
//                 posts: {
//                     create:[
//                         {
//                             title:'',
//                             comments:89,
//                             content:'hai'
//                         }
//                     ]
//                 }
//             }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }




// export const addUser = async (req: Request, resp: Response) => {

//     try {
//         // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
//         const userList = [{ email: "juma.com3", name: "juma3", phone: 73890 }]
//         const results = await prisma.user.create({
//             data: {
//                 email: 'kaka2@gmailcom',
//                 phone: 345,
//                 name: 'kaka2',
//                 posts:{
//                     connectOrCreate:{
//                         where:{
//                             id:2,
//                         },
//                         create:{
//                             title:'post kaka2',
//                             comments:100,
//                             content:'kaka read2'
//                         }
//                     }
//                 }
//             }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }





////////////////UPSERT()||||||||||||||||||||||||

// upsert()=>it goes to update data by specified field(where:{}), IF NOT EXIST specified data(where:{}) IT GOES TO CREATE NEW ONE WITH DATA SPECIFIED

export const addUser = async (req: Request, resp: Response) => {

    try {
        // const userList =[{email:"ashagmaico",name:"asha",phone:1234567},{email:"juma.com",name:"juma",phone:7890},]
        // const userList = [{ email: "juma.com3", name: "juma3", phone: 73890 }]

        const results = await prisma.user.upsert({
            where:{
                id:1
            },
            update:{
                name:'bibi'

            },
            create:{
                email:'newusergmail.com',
                phone:765432,
                name:'new use'
            
            }
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}





// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             id:{
//                 // in:[1,2]
//                 notIn:[1,2]
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }

// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             id:{
//                not:{
//                 in:[1,2]
//                }
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }


// export const getUser = async(req:Request, resp:Response)=>{

//     try {
//         const results =await prisma.user.findMany({
//            where:{
//             phone:{
//                 not:{
//                    gte :123456890
//                 }
//             }
//            }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }




// export const getUser = async (req: Request, resp: Response) => {

//     try {
//         const results = await prisma.user.findMany({
//             where: {
//                 OR: [
//                     {
//                         id: {
//                             gt: 12345
//                         }
//                     },
//                     {
//                         name: {
//                             contains: "A",
//                             startsWith: 'a',
//                             mode:'insensitive'
//                         }
//                     }
//                 ],
//                 AND: [
//                     {
//                         email:{
//                             endsWith:'2'
//                         }
//                     }
//                 ]
//             }
//         })
//         resp.status(200).json(results)
//     } catch (error) {
//         return resp.status(500).json(` errror at : ${error}`)

//     }

// }



//////||||||||||||||||||||||||||||||RELATION FILTER//////(none, some, every) THIS FOR ONE ===> MANY \\||||||||||||||||||||||||||||||||||||||

export const getUser = async (req: Request, resp: Response) => {

    try {
        const results = await prisma.user.findMany({
            where: {
                posts: {
                    some: {
                        published: false,
                    }
                }
            }
        })
        resp.status(200).json(results)
    } catch (error) {
        return resp.status(500).json(` errror at : ${error}`)

    }

}