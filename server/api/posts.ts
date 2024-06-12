import Post from "../models/Post";

export default defineEventHandler(async (event) => {
  const posts = await Post.findAll();
  return posts;
});
