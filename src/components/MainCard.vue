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
      if (this.project.description.length > 76) {
        return this.project.description.slice(0, 75) + "...";
      }
      return this.project.description;
    },
  },
};
</script>

<template>
  <div class="card flex-grow-1">
    <div class="card-body">
      <!-- IMMAGINE PROGETTO O SEGNAPOSTO IN ALTERNATIVA -->
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
      <!-- /IMMAGINE PROGETTO O SEGNAPOSTO IN ALTERNATIVA -->
      <!-- TITOLO PROGETTO -->
      <h5 class="card-title mt-3">Project Title</h5>
      <p class="card-text">
        {{ project.title }}
      </p>
      <!-- /TITOLO PROGETTO -->
      <!-- DESCRIZIONE -->
      <h5 class="card-title">Description</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <!-- /DESCRIZIONE -->

      <!-- <h5 class="card-title">Application Type</h5>
      <p class="card-text" v-if="project.is_frontend">FrontEnd</p>
      <p class="card-text" v-else-if="project.is_backend">BackEnd</p>
      <p class="card-text" v-else>FullStack</p> -->

      <!-- DIFFOCOLTA -->
      <h5 class="card-title">Difficulty</h5>
      <p class="card-text">
        {{ project.type.difficulty }}
      </p>
      <!-- /DIFFOCOLTA -->
      <!-- TECHNOLOGIES-->
      <h5 class="card-title">Technologies</h5>
      <ul v-if="project.technologies.length">
        <li v-for="technology in project.technologies">
          {{ technology.name }}
        </li>
      </ul>
      <p class="card-text" v-else>Technologies not recorded yet</p>
      <!-- /TECHNOLOGIES-->
    </div>
  </div>
</template>
