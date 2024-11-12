import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Resource not found",
    error: {
      path: req.originalUrl,
      message:
        "The requested URL was not found on this server. Please check the endpoint and try again.",
    },
  });
};

export default notFound;
