import express from "express"
import { addUser, createSession } from "../../../controllers/api/v1/authController.js"
const router=express.Router();


router.post('/add-user',addUser) // Post: user signup
router.post('/create-session',createSession) // Post: user signin

export default router