<script>
import axios from "axios";
import MainCard from "../components/MainCard.vue";
import Loader from "../components/Loader.vue";
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
  },
  methods: {
    getProjects() {
      this.loading = true;
      axios
        .get(`${store.baseUrl}${store.uriProjects}`, {
          params: {
            page: store.currentPage,
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
        this.$router.push({ query: { page: store.currentPage } });
        this.getProjects();
      }
    },
    previousPage() {
      if (store.currentPage > 1) {
        store.currentPage--;
        this.$router.push({ query: { page: store.currentPage } });
        this.getProjects();
      }
    },
  },
  created() {
    this.$router.push({ query: { page: store.currentPage } });
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
      <Loader v-if="loading" />
      <div class="row g-3 justify-content-center" v-else>
        <div class="col-4 d-flex" v-for="project in store.projects">
          <MainCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>
