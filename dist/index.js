"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
const express_1 = __importDefault(require("express"));
const student_1 = __importDefault(require("./routes/student"));
const test_1 = __importDefault(require("./routes/test"));
const unknown_resource_1 = __importDefault(require("./middlewares/unknown-resource"));
const unknown_error_1 = __importDefault(require("./middlewares/unknown-error"));
const validation_error_1 = __importDefault(require("./middlewares/validation-error"));
//Para poder acceder a las variables del ambiente (.env)
//if(process.env.NODE_ENV!=="production"){
dotenv_flow_1.default.config();
const app = (0, express_1.default)();
// Middleware para parsear JSON
app.use(express_1.default.json());
// Rutas de api
app.use("/api/v1/student", student_1.default);
//Rutas de prueva
app.use("/error", test_1.default);
// Middlewares
app.use(validation_error_1.default);
app.use(unknown_resource_1.default); //Error 404
//Middleware de error
app.use(unknown_error_1.default);
app.listen(process.env.SERVER_PORT, function () {
    console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
