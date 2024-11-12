import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowService } from "./borrow.service";

// Controller to handle borrowing a book
const createBorrow = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.createBorrowIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book borrowed successfully",
    data: result,
  });
});

// Controller to retrieve all overdue borrows
const getOverdueBorrows = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowService.getOverdueBorrows();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result,
  });
});

// Export BorrowController with borrowing and overdue-fetching capabilities
export const BorrowController = {
  createBorrow,
  getOverdueBorrows,
};
