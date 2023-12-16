"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1 = require("./EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput.schema");
const InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1 = require("./InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInput.schema");
const PurchaseUpdateManyWithoutCustomerOrderNestedInput_schema_1 = require("./PurchaseUpdateManyWithoutCustomerOrderNestedInput.schema");
exports.CustomerOrderUpdateWithoutCustomerInputSchemaObject = {
    id: joi_1.default.alternatives().try(joi_1.default.string(), joi_1.default.object().keys(StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputSchemaObject)),
    employee: joi_1.default.object().keys(EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1.EmployeeUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
    invoice: joi_1.default.object().keys(InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInput_schema_1.InvoiceUpdateOneRequiredWithoutCustomerOrderNestedInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseUpdateManyWithoutCustomerOrderNestedInput_schema_1.PurchaseUpdateManyWithoutCustomerOrderNestedInputSchemaObject)
};
