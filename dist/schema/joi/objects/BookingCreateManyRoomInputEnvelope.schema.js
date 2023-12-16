"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateManyRoomInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateManyRoomInput_schema_1 = require("./BookingCreateManyRoomInput.schema");
exports.BookingCreateManyRoomInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateManyRoomInput_schema_1.BookingCreateManyRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateManyRoomInput_schema_1.BookingCreateManyRoomInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
