import pkg from "./package";

/* eslint-disable no-undef */
require("dotenv").config();
const contentful = require("contentful");

export default {
  srcDir: "src",
  env: {
    contentfulSpace: process.env.CTF_SPACE_ID,
    contentfulAccessToken: process.env.CTF_CD_ACCESS_TOKEN,
    spotifyId: process.env.SPOTIFY_ID,
    spotifySecret: process.env.SPOTIFY_SECRET,
    spotifyToken: process.env.SPOTIFY_TOKEN
  },
  css: ["~/assets/scss/style.scss"],
  router: {
    linkExactActiveClass: "nav__link--active"
  },
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: pkg.headMeta.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        itemprop: "description",
        content: pkg.headMeta.description
      },
      { name: "theme-color", content: pkg.headMeta.themeColor },
      { name: "msapplication-TileColor", content: pkg.headMeta.themeColor },
      { name: "image", content: pkg.headMeta.imageUrl },
      { itemprop: "name", content: pkg.headMeta.title },
      { itemprop: "image", content: pkg.headMeta.imageUrl },
      { name: "twitter:card", content: "summary" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: pkg.headMeta.title
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: pkg.headMeta.description
      },
      { name: "twitter:site", content: pkg.headMeta.twitter },
      { name: "twitter:creator", content: pkg.headMeta.twitter },
      { name: "twitter:image:src", content: pkg.headMeta.imageUrl },
      { hid: "og:title", name: "og:title", content: pkg.headMeta.title },
      {
        hid: "og:description",
        name: "og:description",
        content: pkg.headMeta.description
      },
      { name: "og:image", content: pkg.headMeta.imageUrl },
      { hid: "og:url", name: "og:url", content: pkg.headMeta.siteUrl },
      { name: "og:site_name", content: pkg.headMeta.title },
      { name: "og:locale", content: "en_US" },
      { name: "og:type", content: "website" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: pkg.headMeta.themeColor
      }
    ]
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });
      return client.getEntries().then(response => {
        return response.items
          .filter(entry => {
            const { id } = entry.sys.contentType.sys;
            return id === `project` || id === `blogPost`;
          })
          .map(entry => {
            let slugBase;
            if (entry.sys.contentType.sys.id === `project`) {
              slugBase = `work`;
            } else {
              slugBase = `writing`;
            }
            return {
              route: `${slugBase}/${entry.fields.slug}`,
              payload: entry
            };
          });
      });
    }
  },
  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/dotenv",
    "@nuxtjs/moment",
    "@bazzite/nuxt-optimized-images"
  ],
  optimizedImages: {
    optimizeImages: true
  },
  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true,
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
    use: ["markdown-it-attrs"],
    highlight: (code, lang) => {
      /* eslint-disable no-undef */
      const Prism = require("prismjs");
      require("prismjs/components/prism-scss");
      /* eslint-enable no-undef */
      return Prism.highlight(
        code,
        Prism.languages[lang] || Prism.languages.markup
      );
    }
  },
  build: {
    extend(config) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
