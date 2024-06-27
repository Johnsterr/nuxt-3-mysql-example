import Post from "../models/Post";

class PostRepository {
  async findAll() {
    return await Post.findAll();
  }

  async findById(id: any) {
    return await Post.findByPk(id);
  }

  async create(data: any) {
    return await Post.create(data);
  }

  async update(id: any, data: any) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return await post.update(data);
  }

  async delete(id: any) {
    const post = await Post.findByPk(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return await post.destroy();
  }
}

export default new PostRepository();
