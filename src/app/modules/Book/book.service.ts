import { Book } from "@prisma/client";
import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import prisma from "../../utils/prisma";

// Creates a new book entry in the database
const createBookIntoDB = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

// Fetches all book entries from the database
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};

// Retrieves a specific book by its ID; throws an error if the book is not found
const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  return result;
};

// Updates a book's information by its ID; throws an error if the book is not found
const updateBookIntoDB = async (bookId: string, data: Partial<Book>) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) throw new AppError(httpStatus.NOT_FOUND, "Book not found");

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

// Deletes a book by its ID; throws an error if the book is not found
const deleteBookFromDB = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) throw new AppError(httpStatus.NOT_FOUND, "Book not found");

  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

// Exporting all book-related service functions as a single object for easy imports
export const BookService = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
