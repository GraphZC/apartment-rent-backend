"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const EmployeeWhereInput_schema_1 = require("./EmployeeWhereInput.schema");
exports.EmployeeRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeWhereInput_schema_1.EmployeeWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeWhereInput_schema_1.EmployeeWhereInputSchemaObject))
};
