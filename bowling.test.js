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

    it('can roll a strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(2);
      for(let i = 0; i < 17; i ++){
        game.roll(0);
      }
      expect(game.calculateScore()).toBe(20);
    });

    it('can roll a perfect game', () => {
      for(i = 0; i < 21; i++) {
        game.roll(10);
      }
      expect(game.calculateScore()).toBe(300);
    });

    it('can roll an average game', () => {
      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(10);
      game.roll(0);
      game.roll(1);
      game.roll(7);
      game.roll(3);
      game.roll(6);
      game.roll(4);
      game.roll(10);
      game.roll(2);
      game.roll(8);
      game.roll(6);
      expect(game.calculateScore()).toBe(133);
    })
  })
  

})