<template>
  <div class="layout layout--post">
    <header class="post__header">
      <nuxt-link to="/writing" class="post__return-link">« Return to list</nuxt-link>
      <h2 class="post__section">Writing</h2>
      <h1 class="post__title">{{ currentPost.fields.title }}</h1>
      <p class="post__date">{{ postDate }}</p>
      <p class="post__category">Tutorial</p>
      <img class="post__hero-image" :src="currentPost.fields.heroImage.fields.file.url" alt />
    </header>
    <main class="main main--content" v-html="$md.render(currentPost.fields.body)"></main>
  </div>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost;
    },
    isLoading() {
      return this.$store.state.post.isLoading;
    },
    postDate() {
      return moment(this.currentPost.fields.publishDate).format("MMMM YYYY");
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("post/getPostBySlug", params.slug);
  },
  mounted() {
    console.log(this);
  }
};
</script>
