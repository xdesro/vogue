/* eslint-disable no-undef */
require("dotenv").config();
const contentful = require("contentful");

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.contentfulSpace,
      accessToken: process.env.contentfulAccessToken
    });
  }
};
