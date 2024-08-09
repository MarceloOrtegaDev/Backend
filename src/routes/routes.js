import { Router } from "express"
import { obtenerId, obtenerTodo, nuevaTask, editarTask, eliminarTask } from "../controllers/controllers.js"
import {validationError} from "../middlewares/validationsMiddle.js"
import {validarTask} from "../controllers/validaciones.js"


const taskRouter = Router();

taskRouter.get("/:id",obtenerId)
taskRouter.get("/", obtenerTodo)
taskRouter.post("/",validarTask,validationError, nuevaTask)
taskRouter.put("/:id", editarTask)
taskRouter.delete("/:id", eliminarTask)


export {taskRouter}