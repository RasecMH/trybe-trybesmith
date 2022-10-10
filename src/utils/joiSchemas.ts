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
  displayName: Joi.string().required().min(8).messages({
    'string.min': 'INVALIDDISPLAYNAMELENGTH',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'INVALIDEMAILFIELD',
  }),
  password: Joi.string().required().min(6).messages({
    'string.min': 'INVALIDPASSWORDLENGTH',
  }),
  image: Joi.string().allow(null, ''),
});