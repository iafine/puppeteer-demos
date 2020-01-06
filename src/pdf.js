'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://docs.nestjs.cn/6/fundamentals", {waitUntil: 'networkidle2'});
  await page.pdf({
    displayHeaderFooter: true,
    path: "assets/nest-doc.pdf",
    format: "A4",
    headerTemplate: '<b style="font-size: 30px">Nest Doc<b/>',
    footerTemplate: '<b style="font-size: 30px">End</b>',
    margin: {
      top: "100px",
      bottom: "200px",
      right: "30px",
      left: "30px"
    }
  });
  await browser.close();
})();
