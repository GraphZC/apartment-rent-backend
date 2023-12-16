"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingFindFirstSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const objects_1 = require("./objects");
const enums_1 = require("./enums");
exports.BookingFindFirstSchema = joi_1.default.object().keys({ where: joi_1.default.object().keys(objects_1.BookingWhereInputSchemaObject), orderBy: joi_1.default.object().keys(objects_1.BookingOrderByWithRelationInputSchemaObject), cursor: joi_1.default.object().keys(objects_1.BookingWhereUniqueInputSchemaObject), take: joi_1.default.number(), skip: joi_1.default.number(), distinct: joi_1.default.array().items(enums_1.BookingScalarFieldEnumSchema) }).required();
