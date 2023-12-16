"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedDateTimeFilter_schema_1 = require("./NestedDateTimeFilter.schema");
exports.DateTimeFilterSchemaObject = {
    equals: joi_1.default.date(),
    lt: joi_1.default.date(),
    lte: joi_1.default.date(),
    gt: joi_1.default.date(),
    gte: joi_1.default.date(),
    not: joi_1.default.alternatives().try(joi_1.default.object().keys(NestedDateTimeFilter_schema_1.NestedDateTimeFilterSchemaObject))
};
