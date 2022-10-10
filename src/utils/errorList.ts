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
  EMPTYUSERNAMEFIELD: {
    status: 400,
    message: '"username" is required',
  },
  USERNAMEFIELDNOTASTRING: {
    status: 422,
    message: '"username" must be a string',
  },
  USERNAMEFIELDLENGTH: {
    status: 422,
    message: '"username" length must be at least 3 characters long',
  },
  EMPTYCLASSEFIELD: {
    status: 400,
    message: '"classe" is required',
  },
  CLASSEFIELDNOTASTRING: {
    status: 422,
    message: '"classe" must be a string',
  },
  CLASSEFIELDLENGTH: {
    status: 422,
    message: '"classe" length must be at least 3 characters long',
  },
  EMPTYLEVELFIELD: {
    status: 400,
    message: '"level" is required',
  },
  LEVELFIELDNOTASTRING: {
    status: 422,
    message: '"level" must be a number',
  },
  LEVELFIELDLENGTH: {
    status: 422,
    message: '"level" must be greater than or equal to 1',
  },
  EMPTYPASSWORDFIELD: {
    status: 400,
    message: '"password" is required',
  },
  PASSWORDFIELDNOTASTRING: {
    status: 422,
    message: '"password" must be a string',
  },
  PASSWORDFIELDLENGTH: {
    status: 422,
    message: '"password" length must be at least 8 characters long',
  },
};

export default errorList;