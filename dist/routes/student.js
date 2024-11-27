"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/usuarios.ts
const express_1 = require("express");
const student_1 = require("../controllers/student");
const validate_1 = __importDefault(require("../middlewares/validate"));
const student_2 = require("../schemas/student");
const router = (0, express_1.Router)();
// Regresa todos los alumnos en la base de datos
router.get("/", student_1.getStudents);
// Crea un alumno nuevo en la BD
router.post("/", (0, validate_1.default)(student_2.studentSchema), student_1.createStudent);
// Actualiza los datos de un alumno en la BD
router.put("/:id", (0, validate_1.default)(student_2.studentSchema), student_1.updateStudent);
// Borra los datos de un alumno en la BD
router.delete("/:id", student_1.deleteStudent);
exports.default = router;
