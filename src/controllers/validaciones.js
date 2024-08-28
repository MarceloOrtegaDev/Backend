import {body} from "express-validator"

export const validarTask = [
    body("title").notEmpty({
        max: 10,
    }).withMessage("El título no debe estar vacio")
    .isString().withMessage("El título no debe contener numeros"),


    body("description").notEmpty().withMessage("La descripción es obligatoria"),
    body("isComplete").isBoolean().withMessage("El campo isComplete debe ser booleano") 
]