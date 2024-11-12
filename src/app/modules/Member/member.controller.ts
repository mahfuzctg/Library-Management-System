import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberService } from "./member.service";

// Controller to create a new member
const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Member created successfully",
    data: result,
  });
});

// Controller to fetch all members
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Members retrieved successfully",
    data: result,
  });
});

// Controller to fetch a single member by ID
const getMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.getMemberByIdFromDB(memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
    data: result,
  });
});

// Controller to update member details by ID
const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.updateMemberIntoDB(memberId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member updated successfully",
    data: result,
  });
});

// Controller to delete a member by ID
const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  await MemberService.deleteMemberFromDB(memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member successfully deleted",
  });
});

// Exporting all member-related controllers
export const MemberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
