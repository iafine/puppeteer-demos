"use strict";

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("https://github.com/login");
  await page.waitFor(1000);
  await page.type("#login_field", "test"); 
  await page.type("#password", "test", {
    delay: 100
  }); 
  await page.click("input[type=submit]");
})();
