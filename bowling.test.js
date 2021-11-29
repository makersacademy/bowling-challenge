const Bowling = require('./bowling');

describe('bowling', () => {
  const bowling = new Bowling;

  describe('addRoll', () => {
    it('adds the roll score to the total score', () => {
      bowling.Roll(1);
      bowling.Roll(4);
      expect(bowling.getTotalScore()).toEqual(5);
    });

    it('only adds the score when both rolls have been done', () => {
      bowling.Roll(5);
      expect(bowling.getTotalScore()).toBe(5);
      bowling.Roll(5);
      expect(bowling.getTotalScore()).toBe(15);
    });

    it('doubles the score of the first roll when previous frame was a spare', () => {
      bowling.Roll(3);
      bowling.Roll(3);
      expect(bowling.getTotalScore()).toBe(24);
    });

    it('adds score after one roll on strike', () => {
      bowling.Roll(10);
      expect(bowling.getTotalScore()).toBe(34);
    });

    it('adds strike bonus', () => {
      bowling.Roll(5);
      bowling.Roll(4);
      expect(bowling.getTotalScore()).toBe(55);
    });

    it('shows final score and stops further rolls', () => {
      for (let i = 0 ; i < 8 ; i++) {
        bowling.Roll(4);
      }
      expect(bowling.getFrame()).toBe(9);
      bowling.Roll(5);
      bowling.Roll(4);
      expect(bowling.Roll(5)).toBe("Game over, you scored 156.");
    });

    const newGame = new Bowling;

    describe('getRoll', () => {
      it('gets the current roll', () => {
        newGame.Roll(4);
        expect(newGame.getRoll()).toBe(2);
      });
    })
 
    const gutterGame = new Bowling;

    describe('GutterGame', () => {
      it('Scores the game as a gutter game', () => {
        for (let i = 0 ; i < 20 ; i++) {
          gutterGame.Roll(0);
        }
        gutterGame.Roll(0)
        expect(gutterGame.Roll(0)).toBe("Gutter Game");
      })
    });

  });
});