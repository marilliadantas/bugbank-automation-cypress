const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://bugbank.netlify.app/", 
    setupNodeEvents(on, config) {
    },
  },
});