const expect = require('expect-puppeteer')
// const puppeteer = require('puppeteer');

describe('Homepage', function () {

    beforeEach(async () => {
        await page.goto('http://localhost:3000')
    })

    it('should say Bowling', async () => {
        await expect(page).toMatch('Bowling Scorecard')
    })

    it('opening roll appears on screen immediately', async () => {
        await page.type('#input_score', "6")
        await page.click('#submit_score')
        await expect(page).toMatch('6')
    })

    it('add scores to total score immediately', async () => {
        await page.type('#input_score', "6")
        await page.click('#submit_score')
        await page.type('#input_score', "4")
        await page.click('#submit_score')
        await expect(page).toMatch('10')
    })

    it('returns correct score after spare', async () => {
        await page.type('#input_score', "6")
        await page.click('#submit_score')
        await page.type('#input_score', "4")
        await page.click('#submit_score')
        await page.type('#input_score', "4")
        await page.click('#submit_score')
        await expect(page).toMatch('18')
    })

    it('returns correct score after strike', async () => {
        await page.type('#input_score', "10")
        await page.click('#submit_score')
        await page.type('#input_score', "4")
        await page.click('#submit_score')
        await page.type('#input_score', "4")
        await page.click('#submit_score')
        await expect(page).toMatch('26')
    })

    it('returns 0 for Gutter game', async () => {
        for (var i = 0; i < 20; i++) {
            await page.type('#input_score', "0")
            await page.click('#submit_score')
        }
        await expect(page).toMatch('0')
    })

    it('returns 300 for Perfect game', async () => {
        for (var i = 0; i < 12; i++) {
            await page.type('#input_score', "10")
            await page.click('#submit_score')
        }
        await expect(page).toMatch('300')
    })
})


