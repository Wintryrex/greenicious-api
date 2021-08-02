const message = {
  serverError: {
    message: 'Ops! Something went wrong!',
    code: 500,
  },
  idNotExist: {
    message: 'Item is missing an Id',
    code: 500,
  },
  wrongInput: {
    message:
      'Provided input is invalid. Please make sure that all the required input are provided and that no additional data is provided.',
    code: 400,
  },
};

export default message;
