const dotenv = require("dotenv").config();
const { mobbex } = require("mobbex");

const mobbexConfig = mobbex.configurations.configure({
  apiKey: process.env.MOBBEX_API_KEY,
  accessToken: process.env.MOBBEX_ACCESS_TOKEN,
});

module.exports = mobbexConfig;
