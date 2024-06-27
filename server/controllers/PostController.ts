import logger from "../logger";
import postService from "../services/PostService";
import {handleSuccess, handleError} from "../utils/responseHandler";

class PostController {
  async getPosts() {
    try {
      const posts = await postService.getAllPosts();
      return handleSuccess(posts);
    } catch (error) {
      logger.error("Database error: %s", (error as Error).message, {
        stack: (error as Error).stack,
      });
      return handleError(error);
    }
  }

  async getPost(id: any) {
    try {
      const post = await postService.getPostById(id);
      return handleSuccess(post);
    } catch (error) {
      logger.error("Database error: %s", (error as Error).message, {
        stack: (error as Error).stack,
      });
      return handleError(error);
    }
  }

  async createPost(event: any) {
    try {
      const post = await postService.createPost(event);
      return handleSuccess(post);
    } catch (error) {
      logger.error("Database error: %s", (error as Error).message, {
        stack: (error as Error).stack,
      });
      return handleError(error);
    }
  }

  async updatePost(id: any, data: any) {
    try {
      const post = await postService.updatePost(id, data);
      return handleSuccess(post);
    } catch (error) {
      logger.error("Database error: %s", (error as Error).message, {
        stack: (error as Error).stack,
      });
      return handleError(error);
    }
  }

  async deletePost(id: any) {
    try {
      await postService.deletePost(id);
      return handleSuccess({message: "Post deleted successfully"});
    } catch (error) {
      logger.error("Database error: %s", (error as Error).message, {
        stack: (error as Error).stack,
      });
      return handleError(error);
    }
  }
}

export default new PostController();
