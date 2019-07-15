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
    <!--       
    <div class="writing-list__content">
      <p class="writing-list__category">Tutorial</p>
      <p class="writing-list__title">{{ post.fields.title }}</p>
      <p
        class="writing-list__excerpt"
      >It's a simple enough animation, with a really nice loading effect and staggered timeline that make it feel super fluid. I've been really into Vue.js lately, and this seemed like a perfect opportunity to code out a little app. Live your life, but I'm gonna use SCSS for style here.</p>
    </div>
    <nuxt-link
      class="writing-list__link writing-list__link--external"
      :to="`writing/${post.fields.slug}`"
    >view the post—</nuxt-link>
    <img class="writing-list__image" :src="post.fields.heroImage.fields.file.url" alt />-->
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
