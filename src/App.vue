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
        console.log(response.data);
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
  <AppHeader />
  <AppMain :projects="projects" />
</template>
