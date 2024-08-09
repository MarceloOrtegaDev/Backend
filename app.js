import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
import { taskRouter } from "./src/routes/routes.js"

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan());
app.use("/api/tasks",taskRouter)



//puerto
app.listen(3000, ()=>{
    console.log("Server escuchando en el puerto 3000")
})


