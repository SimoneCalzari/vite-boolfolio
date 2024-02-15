<script>
import MainCard from "./MainCard.vue";
export default {
  components: {
    MainCard,
  },
  props: ["projects"],
};
</script>

<template>
  <main class="flex-grow-1 overflow-auto pb-4">
    <div class="container">
      <h2 class="text-center py-4">My Projects</h2>
      <div class="row g-3">
        <div class="col col-md-4 d-flex" v-for="project in projects">
          <MainCard :project="project" />
        </div>
      </div>
    </div>
  </main>
</template>
