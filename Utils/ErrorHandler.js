class ErrorHandler extends Error {
  constructor(mesaage, stausCode) {
    super(message);
    this.stausCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.Exports = ErrorHandler;
