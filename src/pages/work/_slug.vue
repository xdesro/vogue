<template>
  <div class="layout layout--post">
    <PostHeader :post="currentProject" section="work" />
    <main class="main post__content" id="main" role="main">
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
    },
    meta() {
      return {
        title: `Henry Desroches | ${this.currentProject.fields.title}`,
        description: this.currentProject.fields.description
      };
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          itemprop: "description",
          content: this.currentProject.fields.description
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.meta.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.meta.description
        },
        { hid: "og:title", name: "og:title", content: this.meta.title },
        {
          hid: "og:description",
          name: "og:description",
          content: this.meta.description
        }
      ],
      script: [{ src: "https://static.codepen.io/assets/embed/ei.js" }]
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("project/getProjectBySlug", params.slug);
  }
};
</script>
