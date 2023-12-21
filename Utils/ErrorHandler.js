class ErrorHandler extends Error {
  constructor(message, stausCode) {
    super(message);
    this.stausCode = stausCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.Exports = ErrorHandler;
