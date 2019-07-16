/* eslint-disable no-undef */
require("dotenv").config();
const contentful = require("contentful");

export default {
  srcDir: "src",
  css: ["~/assets/scss/style.scss"],
  router: {
    linkExactActiveClass: "nav__link--active"
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  generate: {
    routes: () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });
      return client
        .getEntries({
          content_type: "blogPost"
        })
        .then(response => {
          return response.items.map(entry => {
            return {
              route: `writing/${entry.fields.slug}`,
              payload: entry
            };
          });
        });
    }
  },
  modules: ["@nuxtjs/markdownit", "@nuxtjs/dotenv", "@nuxtjs/moment"],
  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true,
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
    use: [
      [
        "markdown-it-anchor",
        { permalink: true, permalinkBefore: true, level: [1, 2, 3] }
      ],
      [
        "markdown-it-table-of-contents",
        {
          containerClass: "post__toc",
          listType: "ol"
        }
      ]
    ],
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
