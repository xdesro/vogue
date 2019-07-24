<template>
  <li class="work-list__item">
    <div class="work-list__item-upper">
      <span class="work-list__counter">0{{index}}</span>
      <p class="work-list__title">{{project.fields.title}}</p>
    </div>
    <div class="work-list__item-lower">
      <img
        class="work-list__image"
        :src="`https:${project.fields.heroImage.fields.file.url}?w=500&h=333&fm=jpg&fl=progressive`"
        :alt="project.fields.heroImage.fields.description"
      />
      <div class="work-list__details">
        <p class="work-list__contribution">
          <span v-for="(discipline, index) in project.fields.involvement" :key="index">
            {{discipline}}
            <span v-if="index < project.fields.involvement.length - 1">&amp;</span>
          </span>
        </p>
        <p class="work-list__date">{{ projectDate }}</p>
      </div>
      <p class="work-list__excerpt">{{project.fields.description}}</p>
      <nuxt-link class="work-list__link" :to="project.fields.slug">view the project—</nuxt-link>
    </div>
  </li>
</template>
<script>
import moment from "moment";

export default {
  props: ["project", "index"],
  computed: {
    projectDate() {
      return moment(this.project.fields.date).format("MMMM YYYY");
    }
  }
};
</script>

