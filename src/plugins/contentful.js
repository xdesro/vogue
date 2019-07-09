/* eslint-disable no-undef */
require("dotenv").config();
const contentful = require("contentful");

module.exports = {
  createClient() {
    return contentful.createClient({
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CD_ACCESS_TOKEN
    });
  }
};
