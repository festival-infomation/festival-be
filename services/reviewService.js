import reviewRepository from "../repositorys/reviewRepository.js";

const deleteReview = async (userRole, reviewId) => {
  if (userRole !== "ADMIN") {
    throw new Error("ADMIN 만 변경할 수 있습니다.");
  }
  const data = await reviewRepository.deleteReview(reviewId);
  return data;
};
const createReview = async (userId, userRole, boothId, content, score) => {
  // payRepository에서 userId, boothId 비교한다음에 결제 내역을 확인한다.
  const data = await reviewRepository.createReview(
    userId,
    boothId,
    content,
    score
  );
  return data;
};

const getReview = async (userId, boothId, page, pageSize, orderBy, keyword) => {
  const data = await reviewRepository.getReview(
    boothId,
    page,
    pageSize,
    orderBy,
    keyword
  );
  return data;
};

export default { createReview, getReview, deleteReview };