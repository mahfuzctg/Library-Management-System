import { Member } from "@prisma/client";
import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import prisma from "../../utils/prisma";

// Creates a new member record in the database
const createMemberIntoDB = async (data: Member) => {
  const result = await prisma.member.create({
    data,
  });
  return result;
};

// Retrieves all member records from the database
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};

// Retrieves a single member by ID from the database, throws error if not found
const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: { memberId },
  });

  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Member not found");
  return result;
};

// Updates an existing member's details by ID, throws error if not found
const updateMemberIntoDB = async (memberId: string, data: Partial<Member>) => {
  const member = await prisma.member.findUnique({
    where: { memberId },
  });

  if (!member) throw new AppError(httpStatus.NOT_FOUND, "Member not found");

  const result = await prisma.member.update({
    where: { memberId },
    data,
  });
  return result;
};

// Deletes a member by ID from the database, throws error if not found
const deleteMemberFromDB = async (memberId: string) => {
  const member = await prisma.member.findUnique({
    where: { memberId },
  });

  if (!member) throw new AppError(httpStatus.NOT_FOUND, "Member not found");

  const result = await prisma.member.delete({
    where: { memberId },
  });
  return result;
};

// Exporting all member-related service functions
export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
