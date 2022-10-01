const Game = require('../app/Game');
const Scorecard = require('../app/Scorecard');


beforeEach( () => {
  game = new Game();
  scorecard = new Scorecard();
});

describe('Game class', () => {
  describe('frame scores and bonus type update after ball throw(s)', () => {
    it('normal frame - no spare, no strike', () => {      
      // manually setting the current frame to 1 for testing purposes
      game.setCurrentFrame(1);
      game.throw1(1);
      // game.throw2(1);
      expect(game.currentFrame).toEqual(1);
      // expect(scorecard.frame1.score).toEqual(2);
      expect(game.scorecard.frame1.scoreThrow1).toEqual(1);
      // expect(game.scorecard.frame1.scoreThrow2).toEqual(1);
      // expect(scorecard.frame1.scoreThrow3).toEqual(0);
      // expect(scorecard.frame1.bonus).toEqual('none');
    });
  });
});
