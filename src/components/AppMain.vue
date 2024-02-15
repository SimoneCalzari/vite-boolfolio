<script>
import axios from "axios";
import MainCard from "./MainCard.vue";
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    MainCard,
  },
  props: ["projects"],
  methods: {
    getProjects() {
      axios
        .get(this.store.baseUrl + this.store.uriProjects, {
          params: {
            page: this.store.currentPage,
          },
        })
        .then((response) => {
          this.store.projects = response.data.data.data;
          this.store.lastPage = response.data.data.last_page;
        });
    },
    nextPage() {
      if (this.store.currentPage < this.store.lastPage) {
        this.store.currentPage++;
        this.getProjects();
      }
    },
    previousPage() {
      if (this.store.currentPage > 1) {
        this.store.currentPage--;
        this.getProjects();
      }
    },
  },
};
</script>

<template>
  <main class="flex-grow-1 overflow-auto pb-4">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" @click="previousPage">
          Previous Page
        </button>
        <h2 class="text-center py-4">
          My Projects - Pagina {{ store.currentPage }} di {{ store.lastPage }}
        </h2>
        <button class="btn btn-primary" @click="nextPage">Next Page</button>
      </div>
      <div class="row g-3 justify-content-center">
        <div class="col-4 d-flex" v-for="project in projects">
          <MainCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>
