/* eslint-env jest */
const path = require('path');

const root = path.resolve(__dirname);
const puppeteer = require('puppeteer');

describe('visit page', () => {
  const url = `file:///${root}/../index.html`;
  let browser;

  afterEach(() => {
    browser.close();
  });

  test('goes to right site', async () => {
    browser = await puppeteer.launch({ headless: false, slowmo: 1000 });
    const page = await browser.newPage();
    await page.goto(url);
    const title = await page.title();
    await page.screenshot({ path: 'screenshot.png' });

    expect(title).toBe('Tom\'s super cool bowling scorecard');
  });
});
