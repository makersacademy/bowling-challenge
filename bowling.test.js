const Bowling = require('./bowling')

describe('Bowling', () => {

  beforeEach(() => {
    game = new Bowling;
  });

  describe('calculateScore', () => {

    it('can score a gutter game', () => {
      for(let i = 0; i < 20; i ++) {
        game.roll(0);
      }
      expect(game.calculateScore()).toBe(0);
    });

    it('can score all ones', () => {
      for(let i = 0; i < 20; i ++ ){
        game.roll(1);
        
      }
      console.log(game.rolls)
      expect(game.calculateScore()).toBe(20);
    });

    it('can roll a spare', () => {
      game.roll(5);
      game.roll(5);
      game.roll(2);
      for(let i = 0; i < 17; i ++){
        game.roll(0)
      }
      expect(game.calculateScore()).toBe(14);

    });
  })
  

})