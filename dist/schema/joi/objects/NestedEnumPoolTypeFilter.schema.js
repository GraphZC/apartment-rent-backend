"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPoolTypeFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.NestedEnumPoolTypeFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.link('#NestedEnumPoolTypeFilter'))
};
