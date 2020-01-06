'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

// 截屏自定义viewport的百度网站
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  await page.setViewport({ width: 2048, height: 1152});
  await page.screenshot({path: 'assets/baidu-2048-1152.png', fullPage: true});
  await browser.close();
})();

// 截屏iphoneX上显示的百度网站
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(devices['iPhone X']);
  await page.goto('https://www.baidu.com/');
  await page.screenshot({path: 'assets/baidu-iphonex.png', fullPage: true});
  await browser.close();
})();

// 有头模式截屏百度网站
(async() => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  await page.setViewport({ width: 2048, height: 1152});
  await page.screenshot({path: 'assets/baidu-header-2048-1152.png', fullPage: true});
  await browser.close();
})();

// 截屏本地chrome上的百度网站
(async() => {
  const browser = await puppeteer.launch({ headless: false, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  await page.setViewport({ width: 2048, height: 1152});
  await page.screenshot({path: 'assets/baidu-local-2048-1152.png', fullPage: true});
  await browser.close();
})();