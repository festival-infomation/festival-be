import * as boardRepository from "../repositorys/boardRepositorys.js";

const deleteBoard = async (userId, festivalId, boardId) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const board = await boardRepository.getIdBoard(boardId);
  if (board.userId !== userId) {
    throw new Error("게시글의 작성자가 아닙니다.");
  }

  const data = await boardRepository.deleteBoard(boardId);
  return data;
};
const patchBoard = async (
  userId,
  festivalId,
  boardId,
  title,
  content,
  images,
  boardType,
  lossType
) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }

  const board = await boardRepository.getIdBoard(boardId);
  if (board.userId !== userId) {
    throw new Error("게시글의 작성자가 아닙니다.");
  }

  const data = await boardRepository.patchBoard(
    boardId,
    title,
    content,
    images,
    boardType,
    lossType
  );
  return data;
};
const getIdBoard = async (festivalId, userId, boardId) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const data = await boardRepository.getIdBoard(boardId);
  return data;
};
const getLossBoard = async (
  festivalId,
  userId,
  page,
  pageSize,
  orderBy,
  order
) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const data = await boardRepository.getLossBoard(
    festivalId,
    page,
    pageSize,
    orderBy,
    order
  );
  return data;
};
const getBoard = async (festivalId, userId, page, pageSize, orderBy, order) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const data = await boardRepository.getBoard(
    festivalId,
    page,
    pageSize,
    orderBy,
    order
  );
  return data;
};
const createBoard = async (
  userId,
  festivalId,
  title,
  content,
  images,
  boardType,
  lossType
) => {
  const festivalUser = await boardRepository.participationCheck(
    userId,
    festivalId
  );
  if (!festivalUser) {
    throw new Error("참여자가 아닙니다.");
  }
  const data = await boardRepository.createBoard(
    userId,
    festivalId,
    title,
    content,
    images,
    boardType,
    lossType
  );
  return data;
};

export default {
  createBoard,
  getBoard,
  getIdBoard,
  getLossBoard,
  patchBoard,
  deleteBoard,
};