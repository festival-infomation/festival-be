import prisma from "../utils/prismaClient.js";

const createBooth = (userId, festivalId, data) => {
  return prisma.booth.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      festival: {
        connect: {
          id: festivalId,
        },
      },
      ...data,
    },
  });
};

const getBoothAdmin = (festivalId, page, pageSize, orderBy, keyword, type) => {
  const skip = (page - 1) * pageSize;
  const where = {
    festivalId: festivalId,
  };

  const validBoothTypes = ["EAT", "PLAY", "ETC"];
  if (type && validBoothTypes.includes(type)) {
    where.boothType = type;
  }

  if (keyword) {
    where.AND = [
      {
        OR: [
          { name: { contains: keyword, mode: "insensitive" } },
          { content: { contains: keyword, mode: "insensitive" } },
        ],
      },
    ];
  }

  const validOrders = ["recent", "older"];

  if (!validOrders.includes(orderBy)) {
    orderBy = "recent";
  }

  return prisma.booth.findMany({
    where,
    take: pageSize,
    skip,
    orderBy: { createdAt: orderBy == "recent" ? "desc" : "asc" },
    include: {
      user: true,
      festival: true,
    },
  });
};

export default { createBooth, getBoothAdmin };