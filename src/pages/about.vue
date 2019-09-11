<template>
  <div class="layout layout--about">
    <PageHeader title="About" />
    <main class="main about" id="main" role="main">
      <figure class="main__img about__profile-pic">
        <img src="~/assets/img/spooky-profile-pic.png" alt="Henry Desroches lookin' spooky." />
      </figure>
      <img class="about__logo" src="~/assets/img/icon-logo.svg" alt role="presentation" />
      <h2 class="about__subtitle">
        Hey there, I’m
        <br />
        <span class="about__subtitle--light">{{person.name}}.</span>
      </h2>
      <div class="about__content" v-html="$md.render(person.shortBio)">
        <p>I’m a creative developer currently based in Denver, Colorado. I’m really into CSS, animation, developer experience, and deleting code.</p>
        <p>I love bending the rules of CSS, making gen    erative art, and WebGL. I have a lot of experience with style code at scale, JS-agnostic design systems, and static site generators. In my non-code time, I foster greyhounds, tweet too much, and ride bikes.</p>
        <p>I’m looking for a new role working on design systems, creative and innovative web projects, or building design & development tooling.</p>
        <p>
          <nuxt-link to="/contact">Let’s chat!</nuxt-link>
        </p>
      </div>
      <div class="about__recognition">
        <h3 class="about__recognition-title">Recognition</h3>
        <ul class="recognition-list">
          <li class="recognition-list__item">
            <a
              class="recognition-list__link"
              href="https://www.awwwards.com/sites/creative-developer-portfolio"
            >
              <strong>Awwwards</strong> Honorable Mention
            </a>
          </li>
          <li class="recognition-list__item">
            <a
              class="recognition-list__link"
              href="https://www.awwwards.com/sites/creative-developer-portfolio"
            >
              <strong>Awwwards</strong> Mobile Excellence
            </a>
          </li>
          <li class="recognition-list__item">
            <a
              class="recognition-list__link"
              href="https://www.cssdesignawards.com/sites/creative-developer-portfolio/35579"
            >
              <strong>CSS Design Awards</strong> Special Kudos
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
export default {
  transition: "about",
  components: { PageHeader },
  computed: {
    person() {
      return this.$store.state.person.person.fields;
    }
  },
  async fetch({ store }) {
    await store.dispatch("person/getPerson");
  }
};
</script>

<style>
</style>
