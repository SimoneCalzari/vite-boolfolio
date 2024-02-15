<script>
export default {
  data() {
    return {
      imgUrl: "http://127.0.0.1:8000/storage/",
    };
  },
  props: {
    project: Object,
  },
  computed: {
    description() {
      return this.project.description.slice(0, 75) + "...";
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <img
        class="card-img-top"
        :src="imgUrl + project.project_img"
        :alt="project.slug"
        v-if="project.project_img"
      />
      <img
        src="https://picsum.photos/200"
        alt="segnaposto"
        v-else
        class="card-img-top"
      />
      <h5 class="card-title">Project Title</h5>
      <p class="card-text">
        {{ project.title }}
      </p>
      <h5 class="card-title">Description</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <h5 class="card-title">Application Type</h5>
      <p class="card-text" v-if="project.is_frontend">FrontEnd</p>
      <p class="card-text" v-else-if="project.is_backend">BackEnd</p>
      <p class="card-text" v-else>FullStack</p>
    </div>
  </div>
</template>
