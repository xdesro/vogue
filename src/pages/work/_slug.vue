<template>
  <div class="layout layout--post">
    <PostHeader :post="currentProject" section="work" />
    <main class="main post__content">
      <ul class="post__tags">
        <li
          class="post__tag"
          v-for="(tag, index) in currentProject.fields.tags"
          :key="index"
        >{{tag}}</li>
      </ul>
      <div class="post__text" v-html="$md.render(currentProject.fields.body)"></div>
    </main>
  </div>
</template>

<script>
import PostHeader from "~/components/PostHeader";
export default {
  transition: "project",
  components: { PostHeader },
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
