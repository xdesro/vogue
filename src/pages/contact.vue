<template>
  <div class="layout layout--contact">
    <PageHeader title="Contact" />
    <main class="main main--container">
      <div class="contact__content text--display text--large" v-html="$md.render(contactText)"></div>
      <ul class="contact__list contact-list">
        <li class="contact__list-item" v-for="(link, index) in primarySocialLinks" :key="index">
          <a :href="link.fields.url" class="contact-list__link">
            <IconSocial class="contact-list__icon" :icon="link.fields.name" />
            <p class="contact-list__title">{{link.fields.name}}</p>
            <div class="contact-list__description" v-html="$md.render(link.fields.description)" />
          </a>
        </li>
        <li class="contact-list__item">
          <ul class="additional-links-list">
            <li
              class="additional-links-list__item"
              v-for="(link, index) in secondarySocialLinks"
              :key="index"
            >
              <a :href="link.fields.url" class="additional-links-list__link">
                <IconSocial class="additional-links-list__icon" :icon="link.fields.name" />
                <p class="additional-links-list__title">{{link.fields.name}}</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <img
        class="contact__accent-img"
        src="~assets/img/illustration-02.svg"
        alt
        role="presentation"
      />
    </main>
  </div>
</template>
<script>
import IconSocial from "~/components/icons/IconSocial";
import PageHeader from "~/components/PageHeader";

export default {
  transition: "contact",
  components: {
    IconSocial,
    PageHeader
  },
  computed: {
    contactText() {
      return this.$store.state.person.person.fields.contactText;
    },
    primarySocialLinks() {
      const { socialLinks } = this.$store.state.person.person.fields;
      return socialLinks.filter(link => {
        return link.fields.description;
      });
    },
    secondarySocialLinks() {
      const { socialLinks } = this.$store.state.person.person.fields;
      return socialLinks.filter(link => {
        return !link.fields.description;
      });
    }
  },
  async fetch({ store }) {
    await store.dispatch("person/getPerson");
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
