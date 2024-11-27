"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/testRoutes.ts
const express_1 = require("express");
const router = (0, express_1.Router)();
// Ruta que lanza un error
router.get("/", (req, res, next) => {
    // Crear un error y pasarlo al siguiente middleware de errores
    const error = new Error("Error de prueba");
    next(error);
});
exports.default = router;
