<template>
  <div>
    <h1>Posts</h1>
    <div>
      <div>
        <label for="slug">Slug</label>
        <input type="text" name="slug" v-model="slug" />
      </div>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div>
        <label for="excerpt">Excerpt</label>
        <input type="text" name="excerpt" v-model="excerpt" />
      </div>
      <div>
        <label for="post-body">Post Body</label>
        <input type="text" name="post-body" v-model="postBody" />
      </div>
    </div>
    <div>
      <button @click="getPosts">Get posts</button>
      <button @click="createPost">Create post</button>
      <button @click="getPostById">Get post</button>
    </div>
    <ul>
      <template v-if="posts && posts.length > 0">
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const posts = ref([]);
const slug = ref("");
const title = ref("");
const excerpt = ref("");
const postBody = ref("");

async function getPosts() {
  const {data} = await $fetch("/api/posts");
  console.log("getPosts", data);
  posts.value = response.data;
}

async function createPost() {
  const {data} = await $fetch("/api/posts", {
    method: "post",
    body: {
      user_id: 28,
      category_id: 28,
      slug: slug.value,
      title: title.value,
      excerpt: excerpt.value,
      body: postBody.value,
    },
  });
  console.log("createPost", data);
  posts.value.push(data);
}

async function getPostById() {
  const id = 2;
  const {data} = await $fetch(`/api/posts/${id}`);
  console.log("getPostById", data);
}

onMounted(async () => {
  const response = await useFetch("/api/posts");
  posts.value = response.data;
});
</script>
