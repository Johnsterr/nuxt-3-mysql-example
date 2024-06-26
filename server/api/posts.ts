import Post from "../models/Post";
import logger from "../logger";

export default defineEventHandler(async (event) => {
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error) {
    console.error("Database error:", error);
    logger.error("Database error: %s", (error as Error).message, {
      stack: (error as Error).stack,
    });
    return {statusCode: 500, message: "Internal Server Error"};
  }
});
