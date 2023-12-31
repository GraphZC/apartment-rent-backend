"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueueValidation = void 0;
const client_1 = require("@prisma/client");
const joi_1 = __importDefault(require("joi"));
const createQueueValidation = (body) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        name: joi_1.default.string().required(),
        role: joi_1.default.string().valid(client_1.EmployeeRole.ADMIN, client_1.EmployeeRole.EMPLOYEE).required()
    });
    return schema.validate(body);
};
exports.createQueueValidation = createQueueValidation;
