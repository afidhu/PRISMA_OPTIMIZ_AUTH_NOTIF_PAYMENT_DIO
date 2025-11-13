import { Router } from "express";
import { addUser, getUser } from "../controller/authController.ts";
import { addpost, getpost } from "../controller/postController.ts";


const router = Router()


router.post('/', addpost)
router.get('/',getpost)



export default router