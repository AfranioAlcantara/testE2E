const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://cep-v2-americanas-npf.b2w.io/cep",
    "video": false
  },
});
