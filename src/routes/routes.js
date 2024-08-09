import { Router } from "express"
import { obtenerId, obtenerTodo, nuevaTask, editarTask, eliminarTask } from "../controllers/controllers.js"

const taskRouter = Router();

taskRouter.get("/:id", obtenerId)
taskRouter.get("/", obtenerTodo)
taskRouter.post("/", nuevaTask)
taskRouter.put("/:id", editarTask)
taskRouter.delete("/:id", eliminarTask)


export {taskRouter}