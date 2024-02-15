<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="d-flex flex-column overflow-hidden vh-100">
    <AppHeader />
    <AppMain />
  </div>
</template>
