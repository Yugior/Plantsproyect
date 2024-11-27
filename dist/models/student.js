"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.insertStudent = exports.findAllStudents = void 0;
const db_1 = __importDefault(require("../db"));
//offset sirve para evaluar el limite desde el numero de offset en adelante, sin contar el offset
// Obtener todos los alumnos
const findAllStudents = async (limit, offset) => {
    const [rows] = await db_1.default.query("SELECT * FROM students LIMIT ? OFFSET ?", [limit, offset]);
    // Consulta para obtener el total de registros
    const [totalRows] = (await db_1.default.query("SELECT COUNT(*) as count FROM students"));
    const total = totalRows[0].count;
    // Calcular el total de páginas
    const totalPages = Math.ceil(total / limit);
    return {
        page: offset / limit + 1,
        limit,
        total,
        totalPages,
        data: rows,
    };
};
exports.findAllStudents = findAllStudents;
const insertStudent = async (student) => {
    const { first_name, last_name, date_of_birth, email, address, phone, gender, grade_level, } = student;
    const [result] = await db_1.default.query(`INSERT INTO students (first_name, last_name, date_of_birth, email, address, phone, gender, grade_level) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
        first_name,
        last_name,
        date_of_birth,
        email,
        address,
        phone,
        gender,
        grade_level,
    ]);
    const { insertId } = result;
    return { id: insertId, ...student };
};
exports.insertStudent = insertStudent;
const updateStudent = async (id, student) => {
    const { first_name, last_name, date_of_birth, email, address, phone, gender, grade_level, } = student;
    await db_1.default.query(`UPDATE students
     SET first_name = ?, 
         last_name = ?, 
         date_of_birth = ?, 
         email = ?, 
         address = ?, 
         phone = ?, 
         gender = ?, 
         grade_level = ?
     WHERE id = ?;`, [
        first_name,
        last_name,
        date_of_birth,
        email,
        address,
        phone,
        gender,
        grade_level,
        id,
    ]);
    return { id, ...student };
};
exports.updateStudent = updateStudent;
const deleteStudent = async (id) => {
    await db_1.default.query(`DELETE FROM students WHERE id =
  ?`, [id]);
    return id;
};
exports.deleteStudent = deleteStudent;
