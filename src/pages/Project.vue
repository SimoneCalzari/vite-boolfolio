<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  data() {
    return {
      project: {},
      store,
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
  },
  created() {
    this.getProject();
    this.$watch(
      () => this.$router.params,
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
      <div v-if="project.technologies?.length > 0">
        <h5>Technologies</h5>
        <span v-for="technology in project.technologies" class="me-2"
          >{{ technology.name }}
        </span>
      </div>

      <div class="mt-3">
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
