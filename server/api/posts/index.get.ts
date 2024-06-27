import PostController from "../../controllers/PostController";

export default defineEventHandler(() => {
  return PostController.getPosts();
});
