describe("Testing Karma with Chrome headless", () => {

    it("Should work if configuration is correct", () => {
      expect(true).toBeTruthy();
    });

});
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
