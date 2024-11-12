import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BorrowController } from "./borrow.controller";
import { BorrowValidation } from "./borrow.validation";

const router = Router();

// Route to create a new borrow record with validation for request data
router.post(
  "/",
  validateRequest(BorrowValidation.createBorrowValidation),
  BorrowController.createBorrow
);

// Route to fetch a list of overdue borrow records (borrowed for more than 14 days)
router.get("/overdue", BorrowController.getOverdueBorrows);

export const BorrowRoutes = router;
