const Bowling = require('./bowling')

describe('Bowling', () => {

  beforeEach(() => {
     game = new Bowling;
  });

  describe('calculateCurrentScore', () => {
    it('can calculate the current score', () => {
      game.roll(5)
      game.roll(2)
      game.roll(4)
      game.roll(4)
      expect(game.calculateCurrentScore()).toBe(15)
    })

    it('can calculate the current score with spare', () => {
      game.roll(5)
      game.roll(5)
      game.roll(4)
      expect(game.calculateCurrentScore()).toBe(18)
    })

    it('can calculate the current score with strike', () => {
      game.roll(10)
      game.roll(3)
      game.roll(4)
      expect(game.calculateCurrentScore()).toBe(24)
    })

    it('can calculate the current score with consecutive strikes', () => {
      game.roll(10)
      game.roll(10)
      game.roll(10)
      expect(game.calculateCurrentScore()).toBe(60)
    })
  })

  describe('calculateTotalScore', () => {

    it('can score a gutter game', () => {
      for(let i = 0; i < 20; i ++) {
        game.roll(0);
      }
      expect(game.calculateTotalScore()).toBe(0);
    });

    it('can score all ones', () => {
      for(let i = 0; i < 20; i ++ ){
        game.roll(1);
        
      }
      expect(game.calculateTotalScore()).toBe(20);
    });

    it('can roll a spare', () => {
      game.roll(5);
      game.roll(5);
      game.roll(2);
      for(let i = 0; i < 17; i ++){
        game.roll(0)
      }
      expect(game.calculateTotalScore()).toBe(14);

    });

    it('can roll a strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(2);
      for(let i = 0; i < 17; i ++){
        game.roll(0);
      }
      expect(game.calculateTotalScore()).toBe(20);
    });

    it('can roll a perfect game', () => {
      for(i = 0; i < 21; i++) {
        game.roll(10);
      }
      expect(game.calculateTotalScore()).toBe(300);
    });

    it('can roll an average game', () => {
      const scoreArray = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
      scoreArray.forEach(score => game.roll(score))
      expect(game.calculateTotalScore()).toBe(133);
    })
  })
  
})
