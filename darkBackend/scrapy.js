const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://tsigmjcet.in';
const langdetect = require('langdetect');

function detectLanguage(text) {
  try {
    const result = langdetect.detect(text);
    return result[0].lang;
  } catch (error) {
    console.error('Error detecting language:', error);
    return null;
  }
}

puppeteer
  .launch()
  .then(function (browser) {
    return browser.newPage();
  })
  .then(function (page) {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then(function (html) {
    const $ = cheerio.load(html);
    $('h2').each(function () {
      const text = $(this).text();
      const language = detectLanguage(text);

      console.log(`Text: ${text}`);
      console.log(`Detected Language: ${language}`);
    });
  })
  .catch(function (err) {
    console.log(err);
  });
