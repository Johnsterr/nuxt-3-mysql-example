import type {H3Event} from "h3";
import PostController from "../../controllers/PostController";

export default defineEventHandler((event: H3Event) => {
  const params = getRouterParams(event);
  const id = params.id;
  console.log("Posts [id].delete", id);
  return PostController.deletePost(id);
});
