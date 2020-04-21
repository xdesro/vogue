<template>
  <header class="post__header">
    <div class="post__header-inner">
      <nuxt-link :to="`/${section}`" class="post__return-link">« Return to list</nuxt-link>
      <h2 class="post__section">{{ section }}</h2>
      <p class="post__date">{{ postDate }}</p>
      <h1 class="post__title">{{ post.fields.title }}</h1>
      <p class="post__category" v-if="category">{{ category }}</p>
    </div>

    <picture class="post__hero-image">
      <source :srcset="`https://${post.fields.heroImage.fields.file.url}?w=1500&h=750&fm=webp`" type="image/webp" />
      <source :srcset="`https://${post.fields.heroImage.fields.file.url}?w=1500&h=750&fm=jpg`" type="image/jpg" />
    </picture>
    <img
      class="post__hero-image"
      :src="`https://${post.fields.heroImage.fields.file.url}?w=1500&h=750&fm=jpg`"
      :alt="post.fields.heroImage.fields.description"
    />
  </header>
</template>

<script>
export default {
  props: ["post", "section"],
  computed: {
    category() {
      if (this.post.fields.category) return this.post.fields.category.fields.title;
      return null;
    },
    postDate() {
      const date = this.post.fields.date || this.post.fields.publishDate;
      return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    },
  },
};
</script>
