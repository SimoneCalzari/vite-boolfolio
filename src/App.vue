<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div class="d-flex flex-column overflow-hidden vh-100">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
