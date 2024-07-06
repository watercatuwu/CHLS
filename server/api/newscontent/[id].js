import { newsContentQuery } from "@clhs-api/core";

async function getNewsContent(id) {
    try {
        const { content } = await newsContentQuery(id);
        return content;
      } catch (errorMessage) {
        return errorMessage;
      }
};

export default defineEventHandler(event => {
    const id = getRouterParam(event, 'id');
    return getNewsContent(id);
});