const Bonuses = require('../services/bonuses');

describe('bonuses', () => {
    it ('recognises a strike', () => {
        bonuses = new Bonuses();
        expect(bonuses.strike()).toBe('Strike!');
    })
    // it ('recognises a 10 as a strike', () => {
    //     bonuses = new Bonuses();
    //     const scoreArray = [
    //         0, 3,
    //         5, 2,
    //         8, 2,
    //         9, 1,
    //         10, 0,
    //         9, 1,
    //         10, 0,
    //         10, 0,
    //         9, 0,
    //         10, 0,
    //         9, 1
    //     ];
    //     expect(bonuses.strike())
    // })
})

