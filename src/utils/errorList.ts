const errorList = {
  EMPTYNAMEFIELD: {
    status: 400,
    message: '"name" is required',
  },
  NAMEFIELDNOTASTRING: {
    status: 422,
    message: '"name" must be a string',
  },
  NAMEFIELDLENGTH: {
    status: 422,
    message: '"name" length must be at least 3 characters long',
  },
  EMPTYAMOUNTFIELD: {
    status: 400,
    message: '"amount" is required',
  },
  AMOUNTFIELDNOTASTRING: {
    status: 422,
    message: '"amount" must be a string',
  },
  AMOUNTFIELDLENGTH: {
    status: 422,
    message: '"amount" length must be at least 3 characters long',
  },
};

export default errorList;