import glob from "glob";
import path from "path";

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
const getDynamicPaths = urlFilepathTable => {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map(filepath => `${url}/${path.basename(filepath, ".json")}`);
    })
  );
};

const dynamicRoutes = getDynamicPaths({
  "/writing": "writing/*.json"
});

export default {
  srcDir: "src",
  css: ["~/assets/scss/style.scss"],
  router: {
    linkExactActiveClass: "nav__link--active"
  },
  head: {
    script: [
      { src: `https://identity.netlify.com/v1/netlify-identity-widget.js` }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true,
    preset: "default",
    breaks: true,
    html: true,
    typographer: true,
    quotes: "“”‘’",
    highlight: (code, lang) => {
      const Prism = require("prismjs");
      return Prism.highlight(
        code,
        Prism.languages[lang] || Prism.languages.markup
      );
    }
  }
};
