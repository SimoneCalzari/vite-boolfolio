import { reactive } from "vue";

export const store = reactive({
  currentPage: 1,
  lastPage: 1,
  projects: [],
  baseUrl: "http://127.0.0.1:8000/",
  uriProjects: "api/projects/",
  imgUrl: "http://127.0.0.1:8000/storage/",
});
