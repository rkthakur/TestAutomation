'use strict';
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.emulate(devices['iPhone 6']);
await page.goto('https://www.coach.com/coach-mini-18k-gold-plated-rexy-necklace/58984.html', {waitUntil: 'networkidle2'});
await page.screenshot({path: 'page.png',fullPage: true});
browser.close();
})();
