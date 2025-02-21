
 import { Router } from "express";
import UserC from "../controller/cController.js";

const router = Router()

router.route("/contacts").post(UserC)



export default router