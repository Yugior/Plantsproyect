"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownError = (err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 500,
        error: "Error del servidor",
        message: "Error interno del servidor",
    });
};
exports.default = unknownError;
