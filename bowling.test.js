const Bowling = require('./bowling')

describe('Bowling', () => {

let game 

  beforeEach(() => {
     game = new Bowling;
  });

  describe('roll', () => {
    it('can add a score to the rolls array', () => {
      game.roll(8);
      expect(game.rolls).toEqual([8]);
    }) 

    it('raises an error if the parameter is > 10 or < 0 ', () => {

      try {
        game.roll(11);

      } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Invalid Entry - Number must be between 0 and 10");
      }
    })

    it('raises an error if the parameter is a decimal', () => {
      try {
        game.roll(1.4);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Invalid Entry - Number must not be a decimal");
      }
    })

    it ('raises an error if the parameter is not type of Number', () => {
      try {
        game.roll('strike!');

      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Invalid Entry - Must be a Number");
      }
    })
  })

  describe('calculateScore: scoring partial games', () => {
    it('can calculate the current score', () => {
      game.roll(5);
      game.roll(2);
      game.roll(4);
      game.roll(4);
      expect(game.calculateScore()).toBe(15);
    })

    it('can calculate the current score with spare', () => {
      game.roll(5);
      game.roll(5);
      game.roll(4);
      expect(game.calculateScore()).toBe(18);
    })

    it('can calculate the current score with strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(4);
      expect(game.calculateScore()).toBe(24);
    })

    it('can calculate the current score with consecutive strikes', () => {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.calculateScore()).toBe(60);
    })
  })

  describe('calculateScore: scoring full games', () => {

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
      for(let i = 0; i < 21; i++) {
        game.roll(10);
      }
      expect(game.calculateScore()).toBe(300);
    });

    it('can roll an average game', () => {
      const scoreArray = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
      scoreArray.forEach(score => game.roll(score));
      expect(game.calculateScore()).toBe(133);
    })
  })
  
})
