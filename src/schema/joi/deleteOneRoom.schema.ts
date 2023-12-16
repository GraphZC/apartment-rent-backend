import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject } from './objects'

export const RoomDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(RoomWhereUniqueInputSchemaObject)  }).required()