<script>
import axios from "axios";
import MainCard from "../components/MainCard.vue";
import Loader from "../components/Loader.vue";
import ProjectSearch from "../components/ProjectSearch.vue";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      loading: false,
    };
  },
  components: {
    MainCard,
    Loader,
    ProjectSearch,
  },
  methods: {
    getProjects() {
      this.loading = true;
      axios
        .get(`${store.baseUrl}${store.uriProjects}`, {
          params: {
            page: store.currentPage,
            key: store.searchKey,
          },
        })
        .then((response) => {
          store.projects = response.data.data.data;
          store.lastPage = response.data.data.last_page;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextPage() {
      if (store.currentPage < store.lastPage) {
        store.currentPage++;
        this.$router.push({
          name: "projects",
          query: { page: store.currentPage, key: store.searchKey },
        });
        this.getProjects();
      }
    },
    previousPage() {
      if (store.currentPage > 1) {
        store.currentPage--;
        this.$router.push({
          name: "projects",
          query: { page: store.currentPage, key: store.searchKey },
        });
        this.getProjects();
      }
    },
  },
  created() {
    store.currentPage = this.$route.query.page ?? 1;
    store.searchKey = this.$route.query.key ?? null;
    this.getProjects();
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
      <ProjectSearch @search="getProjects" />
      <Loader v-if="loading" />
      <div class="row g-3 justify-content-center" v-else>
        <div class="col-4 d-flex" v-for="project in store.projects">
          <MainCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>
