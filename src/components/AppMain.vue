<script>
export default {
  props:
    // {
    //   projects: Array,
    // },
    ["projects"],
};
</script>

<template>
  <main>
    <div class="container">
      <h2 class="text-center py-4">My Projects</h2>
      <ul>
        <li v-for="project in projects">{{ project.title }}</li>
      </ul>
    </div>
  </main>
</template>
