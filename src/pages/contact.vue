<template>
  <div class="layout layout--contact">
    <PageHeader title="Contact" />
    <main class="main main--container">
      <p class="contact__content text--display text--large">
        I’m most active and reachable on Twitter or via email, but you can find me most places on the internet as
        <span
          class="text--emphasis"
        >@xdesro</span>.
      </p>
      <ul class="contact__list contact-list">
        <li class="contact-list__item" v-for="(link, index) in social" :key="index">
          <a :href="link.url" class="contact-list__link">
            <IconSocial class="contact-list__icon" :icon="link.name" />
            <p class="contact-list__title">{{link.name}}</p>
            <p class="contact-list__description" v-html="link.description" />
          </a>
        </li>
        <li class="contact-list__item">
          <ul class="additional-links-list">
            <li
              class="additional-links-list__item"
              v-for="(link, index) in additionalLinks"
              :key="index"
            >
              <a :href="link.url" class="additional-links-list__link">
                <IconSocial class="additional-links-list__icon" :icon="link.name" />
                <p class="additional-links-list__title">{{link.name}}</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <img class="contact__accent-img" src="~assets/img/illustration-02.svg" alt />
    </main>
  </div>
</template>
<script>
import IconSocial from "~/components/icons/icon-social";
import PageHeader from "~/components/PageHeader";
export default {
  components: {
    IconSocial,
    PageHeader
  },
  data() {
    return {
      social: [
        {
          name: `Twitter`,
          description: `Home of the majority of my social sharing about new projects progress, new tech, and killer puns.`,
          url: `https://i.ncredibly.online`
        },
        {
          name: `CodePen`,
          description: `For demos of new tech explorations, animation, and interaction. <span class="text--italic">(RE: "bending the rules of CSS”)</span>`,
          url: `https://www.codepen.io/xdesro`
        },
        {
          name: `GitHub`,
          description: `Open-source contributions and shared projects. Most of my personal projects are public repos here!`,
          url: `http://github.com/xdesro/`
        },
        {
          name: `Twitch`,
          description: `I do livestreams here both in the format of tutorials and productivity streams — think social eating but with code.`,
          url: `https://xdesro.live`
        },
        {
          name: `Instagram`,
          description: `I’m not using this too much lately, but it’s usually a holding ground for artistic projects and Cinema4D experiments.`,
          url: `https://www.instagram.com/xdesro/`
        }
      ],
      additionalLinks: [
        {
          name: `LinkedIn`,
          url: `https://www.linkedin.com/in/henrydesroches/`
        },
        {
          name: `StackOverflow`,
          url: `https://stackoverflow.com/users/7868234/henry-desroches`
        },
        {
          name: `Resume`,
          url: `https://resume.henry.codes`
        }
      ]
    };
  }
};
</script>
