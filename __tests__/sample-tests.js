/* eslint-env jest */
const path = require('path');

const root = path.result(__dirname);
const puppeteer = require('puppeteer');

describe('visit page', () => {
  const url = `file:///${root}../index.html`;

  test('has title', async () => {
    const browser = await puppeteer.launch({ headless: false, slowmo: 1000 });
    const page = await browser.newPage();
    await page.goto(url);
    const title = await page.title();
    await page.screenshot({ path: 'screenshot.png' });

    expect(title).toBe('Bowling');
  });
});
