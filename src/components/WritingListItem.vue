<template>
  <li class="writing-list__item">
    <nuxt-link class="writing-list__link writing-list__link--external" :to="post.fields.slug">
      view the post—
    </nuxt-link>
    <p class="writing-list__date">{{ postDate }}</p>
    <div class="writing-list__image-container">
      <img
        :src="`https:${post.fields.heroImage.fields.file.url}?w=500`"
        :alt="post.fields.heroImage.fields.description"
        class="writing-list__image"
      />
    </div>
    <div class="writing-list__content">
      <p class="writing-list__category">{{ category }}</p>
      <p class="writing-list__title">{{ post.fields.title }}</p>
      <ul class="writing-list__tags">
        <li class="writing-list__tag" v-for="(tag, index) in post.fields.tags" :key="index">
          {{ tag }}
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  props: ["post"],
  computed: {
    category() {
      if (this.post.fields.category) return this.post.fields.category.fields.title;
      return null;
    },
    postDate() {
      const month = new Date(this.post.fields.publishDate).toLocaleDateString("en-US", { month: "short" });
      const year = new Date(this.post.fields.publishDate).toLocaleDateString("en-US", { year: "2-digit" });
      return `${month} ‘${year}`;
    }
  }
};
</script>
