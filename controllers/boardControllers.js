import asyncHandle from "../middleware/error/asyncHandler.js";
import boardService from "../services/boardServices.js";
// 컨트롤러 파람스
// 서비스 유효성
// 레포지토리 디비

const deleteBoardController = asyncHandle(async (req, res, next) => {
  try {
    // const { userId } = req.body;
    const userId = 2;
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
    // const { userId } = req.body;
    const userId = 2;
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
    // const { userId } = req.body;
    const userId = 2;
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
    // const { userId } = req.body;
    const userId = 2;
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
    // const { userId } = req.body;
    const userId = 2;
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
    // const { userId } = req.body;
    const userId = 4;
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
};
