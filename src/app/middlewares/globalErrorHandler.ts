import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message:
      err.message || "Oops! Something went wrong. Please try again later.",
  });
};

export default globalErrorHandler;
