"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedBoolWithAggregatesFilter_schema_1 = require("./NestedBoolWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedBoolFilter_schema_1 = require("./NestedBoolFilter.schema");
exports.BoolWithAggregatesFilterSchemaObject = {
    equals: joi_1.default.boolean(),
    not: joi_1.default.alternatives().try(joi_1.default.boolean(), joi_1.default.object().keys(NestedBoolWithAggregatesFilter_schema_1.NestedBoolWithAggregatesFilterSchemaObject)),
    _count: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedBoolFilter_schema_1.NestedBoolFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedBoolFilter_schema_1.NestedBoolFilterSchemaObject)
};
