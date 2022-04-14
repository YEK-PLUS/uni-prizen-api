const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getUrl = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((res) => res.text())
    .then((text) => resolve(cheerio.load(text)))
    .catch((err) => reject(err));
});

module.exports = getUrl;
