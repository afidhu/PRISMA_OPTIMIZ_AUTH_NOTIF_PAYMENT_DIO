import { Router } from "express";
import { haslogged, login, singup } from "../controller/auth2JwtController.ts";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import { adminMiddleware } from "../middleware/adminMiddleware.ts";



const router = Router()


router.post('/singup', singup)
router.post('/login', login)
router.get('/verifyuser', [authMiddleware, haslogged])
// router.get('/verifyuser', [authMiddleware,adminMiddleware, Createproduct])




export default router