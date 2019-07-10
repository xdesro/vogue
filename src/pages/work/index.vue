<template>
  <div>
    <!-- <div class="container"> -->
    <header class="header">
      <h1 class="header__title">Work—</h1>
    </header>
    <main class="main">
      <ul class="work-list">
        <li class="work-list__item" v-for="(project, index) in projects" :key="index">
          <span class="work-list__counter">0{{index}}</span>
          <p class="work-list__title">{{project.fields.title}}</p>
          <img class="work-list__image" :src="project.fields.heroImage.fields.file.url" />
          <div class="work-list__details">
            <p class="work-list__contribution">
              <span v-for="(discipline, index) in project.fields.involvement" :key="index">
                {{discipline}}
                <span v-if="index < project.fields.involvement.length - 1">&amp;</span>
              </span>
            </p>
            <p class="work-list__date">Summer 2019</p>
          </div>
          <p class="work-list__excerpt">{{project.fields.description}}</p>
          <a class="work-list__link" :href="`work/${project.fields.slug}`">view the project—</a>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("projects/getProjects", params.slug);
  }
};
</script>
