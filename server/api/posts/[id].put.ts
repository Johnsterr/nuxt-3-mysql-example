import type {H3Event} from "h3";
import PostController from "../../controllers/PostController";

export default defineEventHandler(async (event: H3Event) => {
  const params = getRouterParams(event);
  const id = params.id;
  const data = await readBody(event);
  console.log("Posts [id].put", id, data);
  return PostController.updatePost(id, data);
});
