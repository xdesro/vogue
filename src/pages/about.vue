<template>
  <div class="layout layout--about">
    <PageHeader title="About" />
    <main class="main about" id="main" role="main">
      <figure class="main__img about__profile-pic">
        <img :src="person.avatar.src" :alt="person.avatar.alt" />
      </figure>
      <img class="about__logo" src="~/assets/img/icon-logo.svg" alt role="presentation" />
      <h2 class="about__subtitle">
        Hey there, I’m
        <br />
        <span class="about__subtitle--light">{{ person.name }}.</span>
      </h2>
      <div class="about__content" v-html="$md.render(person.shortBio)" />
      <div class="about__recognition">
        <h3 class="about__recognition-title">Recognition</h3>
        <ul class="recognition-list">
          <li class="recognition-list__item" v-for="(source, index) in person.recognition" :key="index">
            <a :href="source.link" class="recognition-list__link">
              <strong>{{ source.publisher }}</strong>
              &nbsp;{{ source.title }}
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  transition: "about",
  computed: {
    person() {
      const fields = this.$store.state.person.person.fields;
      const { shortBio, name } = this.$store.state.person.person.fields;
      const recognition = fields.recognition.map((recognition) => {
        return recognition.fields;
      });
      const avatar = {
        src: this.$store.state.person.person.fields.image.fields.file.url,
        alt: this.$store.state.person.person.fields.image.fields.description,
      };
      return {
        shortBio,
        name,
        recognition,
        avatar,
      };
    },
  },
  async fetch({ store }) {
    await store.dispatch("person/getPerson");
  },
};
</script>
