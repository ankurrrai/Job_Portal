import express from "express"
import { addUser } from "../../../controllers/api/v1/userController.js"
const router=express.Router();

router.post('/add-user',addUser)


export default router