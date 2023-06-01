const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportFilename: "[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    reportPageTitle: 'mocha-awesome-report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    saveHtml: true,
    overwrite: false,
  },

  chromeWebSecurity: false,
  specPattern: 'cypress/Integration/Examples/*.js',
  //pageLoadTimeout: 500000,
  env : {
      baseURL: 'https://openid.qaconnecthq.live/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Frequest_id%3D56CTJdHXypRiL8pKXK12K_CqaP1Gw_kDxw7GEox4ef0',
      secondoryURL: 'https://pwa.qaconnecthq.live',
      username : 'maulik.j@simformsolutions.com',
      password: 'Maulik@123',
      wrongUsername: 'bansari.pujara@simformsolutions.com',
      wrongPassword:'ban123'
  }, 
  },
});
