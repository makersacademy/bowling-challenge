const expect = require('expect-puppeteer')
const puppeteer = require('puppeteer');

// function testAsync(specFunction) {
//     return (done) => {
//         specFunction().then(() => {
//             done();
//         }).catch((error) => {
//             done.fail(error);
//         });
//     };
// }


describe('Homepage', function () {

    beforeEach(async () => {
        await page.goto('http://localhost:3000');
    })

    it('should say Bowling', async () => {
        await expect(page).toMatch('Bowling');
    })
})


