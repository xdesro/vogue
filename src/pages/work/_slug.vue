<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ currentProject.fields.title }}</h1>
    </header>
    <main class="main main--content">
      <!-- <div v-for="(post, index) in posts" :key="index">{{post.fields}}</div> -->
      <div class="container" v-html="$md.render(currentProject.fields.body)"></div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    currentProject() {
      // console.log(this.$store.state.post.currentPost.entry_id);
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
