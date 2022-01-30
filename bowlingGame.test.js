const BowlingGame = require('./bowlingGame');

let game;
beforeEach(() => {
    game = new BowlingGame();
})

function rolls(pins, roll){
    for(let i=0; i<roll; i++){
        game.roll(pins)
    }
}

describe('bowlingGame', () => {
    it('gutter game of zeros returns zero', () => {
      rolls(0, 20)
      expect(game.score()).toEqual(0)
    });

    it('returns 20 for a game of ones', () => {
        rolls(1, 20)
        expect(game.score()).toEqual(20)
    });

    it('returns score when spare is rolled', () => {
        game.roll(5)
        game.roll(5)
        game.roll(3)
        rolls(0, 17)
        expect(game.score()).toEqual(16)
    });
}); 