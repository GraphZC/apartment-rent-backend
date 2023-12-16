// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BookingMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  roomId: SortOrderSchema,
  userId: SortOrderSchema,
  startDate: SortOrderSchema,
  endDate: SortOrderSchema,
  duration: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}