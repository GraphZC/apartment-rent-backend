"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUncheckedCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInput.schema");
exports.EmployeeUncheckedCreateInputSchemaObject = {
    id: joi_1.default.string(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    customerOrder: joi_1.default.object().keys(CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateNestedManyWithoutEmployeeInputSchemaObject)
};
