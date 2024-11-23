import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { MemberController } from "./member.controller";
import { MemberValidation } from "./member.validation";

const router = Router();

// Route to create a new member, with validation middleware
router.post(
  "/",
  validateRequest(MemberValidation.createMemberValidationSchema),
  MemberController.createMember
);

// Route to retrieve all members
router.get("/", MemberController.getAllMembers);

// Route to retrieve a specific member by ID
router.get("/:memberId", MemberController.getMemberById);

// Route to update an existing member by ID, with validation middleware
router.put(
  "/:memberId",
  validateRequest(MemberValidation.updateMemberValidationSchema),
  MemberController.updateMember
);

// Route to delete a member by ID
router.delete("/:memberId", MemberController.deleteMember);

// Exporting the member routes
export const MemberRoutes = router;
