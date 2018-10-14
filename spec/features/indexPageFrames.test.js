const expect = require('expect-puppeteer')

describe('Homepage', function () {

    beforeEach(async () => {
        await page.goto('http://localhost:3000')
    })

    it('opening roll appears in first frame space immediately', async () => {
        await page.type('#input_score', '6')
        await page.click('#submit_score')
        await expect(page).toMatchElement('#frame-1', { text: '6' })
    })

    it('add scores to total score immediately', async () => {
        await page.type('#input_score', '6')
        await page.click('#submit_score')
        await page.type('#input_score', '4')
        await page.click('#submit_score')
        await expect(page).toMatchElement('#frame-1', { text: '10' })
    })

    it('3rd roll fills 2nd frame', async () => {
        await page.type('#input_score', '6')
        await page.click('#submit_score')
        await page.type('#input_score', '2')
        await page.click('#submit_score')
        await page.type('#input_score', '1')
        await page.click('#submit_score')
        await expect(page).toMatchElement('#frame-2', { text: '1' })
    })

    it('returns correct score after spare', async () => {
        await page.type('#input_score', '6')
        await page.click('#submit_score')
        await page.type('#input_score', '4')
        await page.click('#submit_score')
        await page.type('#input_score', '4')
        await page.click('#submit_score')
        await expect(page).toMatchElement('#frame-1', { text: '14' })
        await expect(page).toMatchElement('#frame-2', { text: '4' })
        await expect(page).toMatchElement('#frame-3', { text: '_' })


    })

    it('returns correct score after strike', async () => {
        await page.type('#input_score', '10')
        await page.click('#submit_score')
        await page.type('#input_score', '4')
        await page.click('#submit_score')
        await page.type('#input_score', '4')
        await page.click('#submit_score')
        await expect(page).toMatchElement('#frame-1', { text: '18' })
        await expect(page).toMatchElement('#frame-2', { text: '8' })
        await expect(page).toMatchElement('#frame-3', { text: '_' })
    })

    it('returns 0 for Gutter game', async () => {
        for (var i = 0; i < 20; i++) {
            await page.type('#input_score', '0')
            await page.click('#submit_score')
        }
        await expect(page).toMatchElement('#frame-1', { text: '0' })
        await expect(page).toMatchElement('#frame-2', { text: '0' })
        await expect(page).toMatchElement('#frame-10', { text: '0' })
    })

    it('returns 300 for Perfect game', async () => {
        for (var i = 0; i < 12; i++) {
            await page.type('#input_score', '10')
            await page.click('#submit_score')
        }
        await expect(page).toMatchElement('#frame-1', { text: '30' })
        await expect(page).toMatchElement('#frame-2', { text: '30' })
        await expect(page).toMatchElement('#frame-10', { text: '30' })
    })
})
