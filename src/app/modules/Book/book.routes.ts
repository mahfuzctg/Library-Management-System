import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookController } from "./book.controller";
import { BookValidation } from "./book.validation";

const router = Router();

// Create a new book with validation
router.post(
  "/",
  validateRequest(BookValidation.createBookValidation),
  BookController.createBook
);

// Get all books
router.get("/", BookController.getAllBooks);

// Get a book by ID
router.get("/:bookId", BookController.getBookById);

// Update a book by ID with validation
router.put(
  "/:bookId",
  validateRequest(BookValidation.updateBookValidation),
  BookController.updateBook
);

// Delete a book by ID
router.delete("/:bookId", BookController.deleteBook);

// Export book-related routes
export const BookRoutes = router;
