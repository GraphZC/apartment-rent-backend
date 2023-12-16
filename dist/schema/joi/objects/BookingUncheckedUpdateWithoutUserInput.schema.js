"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUncheckedUpdateWithoutUserInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const PaymentUncheckedUpdateManyWithoutBookingNestedInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutBookingNestedInput.schema");
exports.BookingUncheckedUpdateWithoutUserInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    roomId: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    startDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    endDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    duration: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    payment: joi_1.default.object().keys(PaymentUncheckedUpdateManyWithoutBookingNestedInput_schema_1.PaymentUncheckedUpdateManyWithoutBookingNestedInputSchemaObject)
};
