"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (req, res, next) => {
    try {
        // Parsear y validar los datos de la solicitud
        schema.parse(req.body);
        next(); // Si la validación es exitosa, pasa al siguiente middleware o ruta
    }
    catch (error) {
        // Si ocurre un error de validación, pásalo al middleware de errores
        next(error);
    }
};
exports.default = validate;
