import { z } from "zod";

// Validation schema for creating a borrow record
const createBorrowValidation = z.object({
  body: z.object({
    // Validates that bookId is a required string
    bookId: z.string({
      required_error: "Book id is required",
      invalid_type_error: "Book id must be a string",
    }),
    // Validates that memberId is a required string
    memberId: z.string({
      required_error: "Member id is required",
      invalid_type_error: "Member id must be a string",
    }),
  }),
});

// Export validation schema for borrow-related requests
export const BorrowValidation = {
  createBorrowValidation,
};
