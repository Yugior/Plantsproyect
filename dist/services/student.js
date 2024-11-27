"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.insert = exports.update = exports.findAll = void 0;
const student_1 = require("../models/student");
// Obtener todos los alumnos
const findAll = async (limit, offset) => {
    return await (0, student_1.findAllStudents)(limit, offset);
};
exports.findAll = findAll;
const update = async (id, student) => {
    return await (0, student_1.updateStudent)(id, student);
};
exports.update = update;
const insert = async (student) => {
    return await (0, student_1.insertStudent)(student);
};
exports.insert = insert;
const deleteById = async (id) => {
    return await (0, student_1.deleteStudent)(id);
};
exports.deleteById = deleteById;
