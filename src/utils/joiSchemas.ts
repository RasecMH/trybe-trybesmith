import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'any.required': 'EMPTYNAMEFIELD', 
    'string.empty': 'EMPTYNAMEFIELD', 
    'string.base': 'NAMEFIELDNOTASTRING',
    'string.min': 'NAMEFIELDLENGTH',
  }),
  amount: Joi.string().required().min(3).messages({
    'any.required': 'EMPTYAMOUNTFIELD', 
    'string.empty': 'EMPTYAMOUNTFIELD', 
    'string.base': 'AMOUNTFIELDNOTASTRING',
    'string.min': 'AMOUNTFIELDLENGTH',
  }),
});

export const userSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'any.required': 'EMPTYUSERNAMEFIELD', 
    'string.empty': 'EMPTYUSERNAMEFIELD', 
    'string.base': 'USERNAMEFIELDNOTASTRING',
    'string.min': 'USERNAMEFIELDLENGTH',
  }),
  classe: Joi.string().required().min(3).messages({
    'any.required': 'EMPTYCLASSEFIELD', 
    'string.empty': 'EMPTYCLASSEFIELD', 
    'string.base': 'CLASSEFIELDNOTASTRING',
    'string.min': 'CLASSEFIELDLENGTH',
  }),
  level: Joi.number().required().min(1).messages({
    'any.required': 'EMPTYLEVELFIELD', 
    'number.empty': 'EMPTYLEVELFIELD', 
    'number.base': 'LEVELFIELDNOTASTRING',
    'number.min': 'LEVELFIELDLENGTH',
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': 'EMPTYPASSWORDFIELD', 
    'string.empty': 'EMPTYPASSWORDFIELD', 
    'string.base': 'PASSWORDFIELDNOTASTRING',
    'string.min': 'PASSWORDFIELDLENGTH',
  }),
});

export const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).required().messages({
    'any.required': 'EMPTYPRODUCTSIDSFIELD', 
    'array.empty': 'EMPTYPRODUCTSIDSFIELD', 
    'array.base': 'PRODUCTSIDSFIELDNOTAARRAY',
    'array.items': 'PRODUCTSIDSFIELDNOTANUMBERARRAY',
  }),
});