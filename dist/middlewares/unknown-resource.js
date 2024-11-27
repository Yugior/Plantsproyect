"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unknownResource = (req, res, next) => {
    res.status(404).json({
        status: 404,
        error: "No encontrado",
        message: `La ruta ${req.originalUrl} no existe en el servidor.`,
    });
    console.error(`Recurso no encontrado: ${req.originalUrl}`);
};
exports.default = unknownResource;
