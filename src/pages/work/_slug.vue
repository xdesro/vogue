<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ currentProject.fields.title }}</h1>
    </header>
    <main class="main main--content" v-html="$md.render(currentProject.fields.body)">
      <!-- <div class="container" ></div> -->
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    currentProject() {
      return this.$store.state.project.currentProject;
    },
    isLoading() {
      return this.$store.state.project.isLoading;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("project/getProjectBySlug", params.slug);
  }
};
</script>
