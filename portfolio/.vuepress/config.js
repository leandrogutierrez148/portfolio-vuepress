const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }],
    ['script', {
      src: "https://plausible.io/js/plausible.js",
      dataDomain: "leandrogutierrez.com"
    }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
