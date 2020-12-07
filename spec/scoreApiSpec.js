describe('scoreApi', () => {
    const scoreApi = require('../models/scoreApi')

    let perfectGame = {
        'f1-b1': '10',
        'f1-b2': '',
        'f2-b1': '10',
        'f2-b2': '',
        'f3-b1': '10',
        'f3-b2': '',
        'f4-b1': '10',
        'f4-b2': '',
        'f5-b1': '10',
        'f5-b2': '',
        'f6-b1': '10',
        'f6-b2': '',
        'f7-b1': '10',
        'f7-b2': '',
        'f8-b1': '10',
        'f8-b2': '',
        'f9-b1': '10',
        'f9-b2': '',
        'f10-b1': '10',
        'f10-b2': '10',
        'f10-b3': '10'
      }

    it('returns 300 after a perfect game', () => {
        expect(scoreApi(perfectGame)).toEqual(300)
    })
})