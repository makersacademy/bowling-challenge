'use sctrict';

describe('Scorecard', () => {

  let game;

  let bowlMulti = (pins, bowls) => {
    for (let i = 0; i < bowls; i++) {
      game.bowl(pins);
    }
  }

  beforeEach(() => {
    game = new Scorecard();
  })

  describe('game', () => {
    it('can bowl a gutter game', () => {
      bowlMulti(0, 20)
      expect(game.score()).toEqual(0);
    });

    it('can bowl all ones', () => {
      bowlMulti(1, 20)
      expect(game.score()).toEqual(20);
    });

    it('can bowl a spare', () => {
      game.bowl(7);
      game.bowl(3);
      game.bowl(3);
      bowlMulti(0, 17);
      expect(game.score()).toEqual(16);
    });

    it('can bowl a strike', () => {
      game.bowl(10);
      game.bowl(3);
      game.bowl(4);
      bowlMulti(0, 16);
      expect(game.score()).toEqual(24);
    });

    it('can bowl a perfect game', () => {
      bowlMulti(10, 12);
      expect(game.score()).toEqual(300);
    });

    it('can bowl a game of all spares', () => {
      bowlMulti(5, 21);
      expect(game.score()).toEqual(150);
    })
  });

})