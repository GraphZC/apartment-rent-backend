"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.DateTimeFieldUpdateOperationsInputSchemaObject = {
    set: joi_1.default.date()
};
