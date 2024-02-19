<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  emits: ["search"],
  methods: {
    searchProjects() {
      store.currentPage = 1;
      this.$router.push({
        name: "projects",
        query: {
          page: 1,
          key: store.searchKey,
        },
      });
      this.$emit("search");
    },
  },
};
</script>

<template>
  <div class="input-group mb-4">
    <label for="search-projects" class="w-100 fs-5 mb-3"
      >Search your projects</label
    >
    <input
      type="text"
      class="form-control"
      id="search-projects"
      v-model="store.searchKey"
    />
    <button class="btn btn-primary" type="button" @click="searchProjects">
      Button
    </button>
  </div>
</template>
