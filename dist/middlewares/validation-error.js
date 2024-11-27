"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validationError = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        // Si el error es de Zod, formatea y envía una respuesta de error de validación
        res.status(400).json({
            status: 400,
            error: "Error de Validación",
            issues: err.errors.map((issue) => ({
                campo: issue.path.join("."),
                mensaje: issue.message,
            })),
        });
    }
    else {
        // Si el error no es de Zod, pasa al siguiente manejador de errores (puede ser un error 500)
        next(err);
    }
};
exports.default = validationError;
