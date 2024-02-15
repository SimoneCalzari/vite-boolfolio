<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/",
      uriProjects: "api/projects",
    };
  },
  methods: {
    getProjects() {
      axios.get(this.baseUrl + this.uriProjects).then((response) => {
        this.projects = response.data.data;
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
    <AppMain :projects="projects" />
  </div>
</template>
