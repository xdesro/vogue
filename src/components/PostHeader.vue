<template>
  <header class="post__header">
    <div class="post__header-inner">
      <nuxt-link :to="`/${ section }`" class="post__return-link">« Return to list</nuxt-link>
      <h2 class="post__section">{{ section }}</h2>
      <p class="post__date">{{ postDate }}</p>
      <h1 class="post__title">{{ post.fields.title }}</h1>
      <p class="post__category">{{ category }}</p>
    </div>
    <img class="post__hero-image" :src="post.fields.heroImage.fields.file.url" alt />
  </header>
</template>

<script>
import moment from "moment";

export default {
  props: ["post", "section"],
  computed: {
    category() {
      if (this.post.fields.category)
        return this.post.fields.category.fields.title;
      return null;
    },
    postDate() {
      return moment(this.post.fields.publishDate).format("MMMM YYYY");
    }
  }
};
</script>
