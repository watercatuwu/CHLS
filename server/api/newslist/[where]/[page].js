import { newsListQuery } from "@clhs-api/core";

async function getNewsList(where, page) {
  const decode = decodeURIComponent(where);
  try {
    const { newsList } = await newsListQuery({
      where: decode,
      itemsPerPage: 20,
      page: page-1 // 0 based
    });
    return newsList;
  } catch (errorMessage) {
    return errorMessage;
  };
};

export default defineEventHandler(event => {
  const where = getRouterParam(event, 'where');
  const page = getRouterParam(event, 'page');
  return getNewsList(where, Number(page));
});