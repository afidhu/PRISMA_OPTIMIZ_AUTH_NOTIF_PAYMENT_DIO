

import { Router } from "express";
import { paymentSheet } from "./payment.ts";



const router = Router()


router.post('/', paymentSheet)




export default router

