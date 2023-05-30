const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js',
    pageLoadTimeout: 500000,
    experimentalSessionAndOrigin: true,
    env : {
      URL: 'https://pwa.qaconnecthq.live/',
      username : 'maulik.j@simformsolutions.com',
      password: 'Maulik@123',
      wrongUsername: 'bansari.pujara@simformsolutions.com',
      wrongPassword:'ban123'
    }

  },
});
