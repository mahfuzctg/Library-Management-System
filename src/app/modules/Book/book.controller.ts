import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getBookByIdFromDB(bookId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.updateBookIntoDB(bookId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.deleteBookFromDB(bookId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
