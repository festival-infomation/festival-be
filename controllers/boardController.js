import asyncHandle from "../middleware/error/asyncHandler.js";
import boardService from "../services/boardService.js";
// 컨트롤러 파람스
// 서비스 유효성
// 레포지토리 디비

const adminGetBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId, role: userRole } = req.user;
    const { festivalId } = req.params;
    const { page, pageSize, orderBy, order, keyword, boardType } = req.query;
    const data = await boardService.adminGetBoard(
      parseInt(festivalId),
      parseInt(userId),
      parseInt(page) || 1,
      parseInt(pageSize) || 4,
      orderBy || "createdAt",
      order || "asc",
      keyword || undefined,
      boardType || undefined,
      userRole
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});
const deleteBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId, boardId } = req.params;
    const data = await boardService.deleteBoard(
      parseInt(userId),
      parseInt(festivalId),
      parseInt(boardId)
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const patchBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId, boardId } = req.params;
    const { title, content, images, boardType, lossType } = req.body;

    const data = await boardService.patchBoard(
      parseInt(userId),
      parseInt(festivalId),
      parseInt(boardId),
      title,
      content,
      images,
      boardType,
      lossType
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const getIdBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId, boardId } = req.params;
    const data = await boardService.getIdBoard(
      parseInt(festivalId),
      parseInt(userId),
      parseInt(boardId)
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const getLossBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId } = req.params;
    const { page, pageSize, orderBy, order } = req.query;
    const data = await boardService.getLossBoard(
      parseInt(festivalId),
      parseInt(userId),
      parseInt(page) || 1,
      parseInt(pageSize) || 4,
      orderBy || "createdAt",
      order || "asc"
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

const getBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId } = req.params;
    const { page, pageSize, orderBy, order } = req.query;
    const data = await boardService.getBoard(
      parseInt(festivalId),
      parseInt(userId),
      parseInt(page) || 1,
      parseInt(pageSize) || 4,
      orderBy || "createdAt",
      order || "asc"
    );
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});
const createBoardController = asyncHandle(async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { festivalId } = req.params;
    const { title, content, images, boardType, lossType } = req.body;

    const data = await boardService.createBoard(
      parseInt(userId),
      parseInt(festivalId),
      title,
      content,
      images || [],
      boardType,
      lossType || "NULL"
    );

    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
});

export default {
  createBoard: createBoardController,
  getBoard: getBoardController,
  getIdBoard: getIdBoardController,
  getLossBoard: getLossBoardController,
  patchBoard: patchBoardController,
  deleteBoard: deleteBoardController,
  adminGetBoard: adminGetBoardController,
};