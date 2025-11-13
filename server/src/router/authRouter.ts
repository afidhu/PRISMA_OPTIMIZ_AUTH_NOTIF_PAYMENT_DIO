import { Router } from "express";
import { addUser, getUser } from "../controller/authController.ts";


const router = Router()


router.post('/', addUser)
router.get('/',getUser)



export default router