"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.UserCreateManyInputSchemaObject = {
    id: joi_1.default.string(),
    email: joi_1.default.string().required(),
    name: joi_1.default.alternatives().try(joi_1.default.string()),
    password: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
