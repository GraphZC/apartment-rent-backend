// @ts-nocheck
import Joi from 'joi';


export const UserCreateManyInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}