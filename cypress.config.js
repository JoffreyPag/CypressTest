const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://alura-fotos.herokuapp.com"
  },
  
  "reporter": "junit",
  "reporterOptions": {
  "mochaFile": "cypress/report/junit/test-results-[hash].xml",
  "toConsole" : true
  },
});
