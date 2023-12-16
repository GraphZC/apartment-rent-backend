"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpdateWithoutPaymentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const RoomUpdateOneRequiredWithoutBookingNestedInput_schema_1 = require("./RoomUpdateOneRequiredWithoutBookingNestedInput.schema");
const UserUpdateOneRequiredWithoutBookingNestedInput_schema_1 = require("./UserUpdateOneRequiredWithoutBookingNestedInput.schema");
exports.BookingUpdateWithoutPaymentInputSchemaObject = {
    startDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    endDate: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    duration: joi_1.default.alternatives().try(joi_1.default.number(), joi_1.default.object().keys(IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    room: joi_1.default.object().keys(RoomUpdateOneRequiredWithoutBookingNestedInput_schema_1.RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject),
    user: joi_1.default.object().keys(UserUpdateOneRequiredWithoutBookingNestedInput_schema_1.UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject)
};
