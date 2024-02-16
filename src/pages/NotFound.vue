<script>
export default {};
</script>

<template>
  <main class="flex-grow-1 overflow-auto pb-4">
    <div
      class="container d-flex h-100 flex-column justify-content-center align-items-center"
    >
      <h1>Page not found 404</h1>
      <router-link :to="{ name: 'home' }" class="btn btn-primary"
        >Go back Home</router-link
      >
    </div>
  </main>
</template>
