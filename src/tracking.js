"use strict";

const puppeteer = require("puppeteer");

/**
 * 会生成一个trace.json，直接拖入chrome Performance那里即可查看
 */
(async () => {
  const broswer = await puppeteer.launch();
  const page = await broswer.newPage();
  await page.tracing.start({
    path: "assets/trace.json"
  });
  await page.goto("https://www.v2ex.com");
  await page.tracing.stop();
  broswer.close();
})();
