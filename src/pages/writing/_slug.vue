<template>
  <div class="layout layout--post">
    <header class="post__header">
      <div class="post__header-inner">
        <nuxt-link to="/writing" class="post__return-link">« Return to list</nuxt-link>
        <h2 class="post__section">Writing</h2>
        <p class="post__date">{{ postDate }}</p>
        <h1 class="post__title">{{ currentPost.fields.title }}</h1>
        <p class="post__category">Tutorial</p>
      </div>
      <img class="post__hero-image" :src="currentPost.fields.heroImage.fields.file.url" alt />
    </header>
    <main class="main post__content">
      <ul class="post__tags">
        <li class="post__tag" v-for="(tag, index) in currentPost.fields.tags" :key="index">{{tag}}</li>
      </ul>
      <div class="post__text" v-html="$md.render(currentPost.fields.body)"></div>
    </main>
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
