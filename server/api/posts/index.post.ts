import type {H3Event} from "h3";
import PostController from "../../controllers/PostController";

export default defineEventHandler(async (event: H3Event) => {
  const data = await readBody(event);
  return PostController.createPost(data);
});
