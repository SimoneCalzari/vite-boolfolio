<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  data() {
    return {
      project: {},
      store,
      comment: "",
      author: "",
    };
  },
  methods: {
    getProject() {
      axios
        .get(`${store.baseUrl}${store.uriProjects}${this.$route.params.slug}`)
        .then((response) => {
          if (!response.data.status) {
            this.$router.push({ path: "/project-not-found" });
          } else {
            this.project = response.data.data;
          }
        });
    },
    postComment() {
      axios
        .post(`${store.baseUrl}${store.uriPostComment}`, {
          author: this.author,
          content: this.comment,
          project_id: this.project.id,
        })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          this.project.comments.push(response.data.results);
          this.comment = "";
          this.author = "";
        });
    },
  },
  created() {
    this.getProject();
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getProjects();
      }
    );
  },
};
</script>

<template>
  <main class="flex-grow-1 overflow-auto pb-4">
    <div class="container pb-3">
      <h2 class="text-center py-3">{{ project.title }}</h2>
      <img
        class="mb-3"
        :src="store.imgUrl + project.project_img"
        :alt="project.slug"
        v-if="project.project_img"
      />
      <div v-if="project.slug">
        <h5>Slug</h5>
        <p>{{ project.slug }}</p>
      </div>
      <div v-if="project.description">
        <h5>Description</h5>
        <p>{{ project.description }}</p>
      </div>
      <div v-if="project.type?.length > 0">
        <h5>Difficulty</h5>
        <p>{{ project.type.difficulty }}</p>
      </div>
      <div v-if="project.technologies?.length > 0" class="mb-3">
        <h5>Technologies</h5>
        <span v-for="technology in project.technologies" class="me-2"
          >{{ technology.name }}
        </span>
      </div>
      <h4 class="mb-2">Comments</h4>
      <p v-if="project.comments?.length < 1">No comments yet..</p>
      <div
        class="border border-3 border-primary rounded px-3 pt-3 mb-3"
        v-for="comment in project.comments"
        v-else
      >
        <h6>{{ comment.author }}</h6>
        <p>{{ comment.content }}</p>
      </div>

      <form @submit.prevent="postComment">
        <h3>Add a comment</h3>
        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input
            type="text"
            class="form-control"
            id="author"
            v-model="author"
          />
        </div>
        <div class="mb-3">
          <label for="new-comment" class="form-label">Comment</label>
          <textarea
            class="form-control"
            id="new-comment"
            rows="3"
            v-model="comment"
          ></textarea>
        </div>
        <button class="btn btn-success">Submit</button>
      </form>
      <div class="mt-3 text-end">
        <router-link
          class="btn btn-primary"
          :to="{
            name: 'projects',
            query: { page: store.currentPage, key: store.searchKey },
          }"
          >Back to Projects</router-link
        >
      </div>
    </div>
  </main>
</template>
