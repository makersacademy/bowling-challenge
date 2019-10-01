const puppeteer = require('puppeteer');
let page;
let browser;

beforeAll(async () => {
 browser = await puppeteer.launch();
 page = await browser.newPage();
});

describe("BowlingScoreCard", () => {
  test("entering a throw, shows a throw", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#next-throw");
    await page.type('input[name="next-throw"]', '5');
    await page.click('input[type="submit"]');
    await page.waitForSelector('#f1-b1');
    const frame = await page.$eval('#f1-b1', e => e.innerHTML);
    await expect(frame).toBe("5");
  });
});

afterAll(() => {
 browser.close();
});
