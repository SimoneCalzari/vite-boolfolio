<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getProjects() {
      // axios.get(this.baseUrl + this.uriProjects).then((response) => {
      //   this.projects = response.data.data;
      // });
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
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="d-flex flex-column overflow-hidden vh-100">
    <AppHeader />
    <AppMain :projects="store.projects" />
  </div>
</template>
