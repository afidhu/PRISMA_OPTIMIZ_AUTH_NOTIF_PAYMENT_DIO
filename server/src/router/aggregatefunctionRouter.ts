import { Router } from "express";
import { aggregatefunctions } from "../controller/aggregateFuncController.ts";



const router = Router()


router.get('/',aggregatefunctions)



export default router