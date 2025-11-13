import { Router } from "express";
import { getpage } from "../controller/pagenationController.ts";



const router = Router()


router.get('/',getpage)



export default router