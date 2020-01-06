"use strict";

const puppeteer = require("puppeteer");
const axios = require("axios");

/**
 * 正常的爬虫逻辑，面对SPA站点，只能得到JS代码
 */
// (async () => {
//   const res = await axios.get("https://preview.pro.ant.design/dashboard/analysis");
//   console.log(res.data);
// })();

/**
 * puppeteer可以抓取SPA站点内容
 */
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://preview.pro.ant.design/dashboard/analysis");
  console.log(await page.content());
})();
