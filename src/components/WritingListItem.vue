<template>
  <li class="writing-list__item">
    <div class="writing-list__content">
      <p class="writing-list__category">{{category}}</p>
      <p class="writing-list__title">{{ post.fields.title }}</p>
      <img :src="post.fields.heroImage.fields.file.url" alt class="writing-list__image" />
      <div class="writing-list__excerpt" v-html="$md.render(post.fields.excerpt)" />
      <ul class="writing-list__tags">
        <li class="writing-list__tag" v-for="(tag, index) in post.fields.tags" :key="index">{{tag}}</li>
      </ul>
      <p class="writing-list__date">{{postDate}}</p>
      <nuxt-link
        class="writing-list__link writing-list__link--external"
        :to="`writing/${post.fields.slug}`"
      >view the post—</nuxt-link>
    </div>
  </li>
</template>
<script>
import moment from "moment";
export default {
  props: ["post"],
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
