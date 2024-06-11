import postRepository from "../repositories/PostRepository";

class PostService {
  async getAllPosts() {
    return await postRepository.findAll();
  }

  async getPostById(id: any) {
    return await postRepository.findById(id);
  }

  async createPost(data: any) {
    return await postRepository.create(data);
  }

  async updatePost(id: any, data: any) {
    return await postRepository.update(id, data);
  }

  async deletePost(id: any) {
    return await postRepository.delete(id);
  }
}

export default new PostService();
