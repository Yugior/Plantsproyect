"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudents = void 0;
const student_1 = require("../services/student");
const student_2 = require("../models/student");
// Obtener todos los alumnos
const getStudents = async (req, res) => {
    try {
        // Obtener parámetros de paginación con valores por defecto
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        // Calcular offset
        const offset = (page - 1) * limit;
        const students = await (0, student_1.findAll)(limit, offset);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).json({ message: "Error al obtener alumnos", error });
    }
};
exports.getStudents = getStudents;
const createStudent = async (req, res) => {
    try {
        const student = req.body;
        await (0, student_2.insertStudent)(student);
        res.status(201).json({ message: "Alumno creado exitosamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al crear alumno", error });
    }
};
exports.createStudent = createStudent;
const updateStudent = async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id);
        const student = req.body;
        await (0, student_1.update)(id, student);
        res.status(201).json({ message: "Alumno actualizado exitosamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al actualizar el alumno", error });
    }
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id);
        await (0, student_1.deleteById)(id);
        res.status(201).json({ message: "Alumno eliminado exitosamente" });
    }
    catch (error) {
        res.status(400).json({ message: "Error al eliminar el alumno", error });
    }
};
exports.deleteStudent = deleteStudent;
