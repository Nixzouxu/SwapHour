const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Pasti benar karena sesuai dengan port localhost di dokumen QA
    supportFile: false
  },
});