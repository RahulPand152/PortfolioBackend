import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())


//routers

import router from "./router/conRouter.js"

// routes declaration 
app.use("/api/v1", router)

export{app}