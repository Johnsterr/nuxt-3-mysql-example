import Post from "../models/Post";

export default defineEventHandler(async (event) => {
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error) {
    console.error("Database error:", error);
    return {statusCode: 500, message: "Internal Server Error"};
  }
});
