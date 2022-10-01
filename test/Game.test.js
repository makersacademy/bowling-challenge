const Game = require('../app/Game');
const Scorecard = require('../app/Scorecard');


beforeEach( () => {
  game = new Game();
  scorecard = new Scorecard();
});

describe('Game class', () => {
  describe('1 frame - frame score and bonus type update after ball throw(s)', () => {
    it('1 frame - 2 throws, no spare, no strike', () => {      
      game.setCurrentFrame(1);
      game.throw1(1);
      game.throw2(1);
      game.setThrowsTotalScore();
      game.setFrameBonusType();

      expect(game.currentFrame).toEqual(1);
      expect(game.frameScore).toEqual(2);
      expect(game.frameThrow1).toEqual(1);
      expect(game.frameThrow2).toEqual(1);
      expect(game.frameThrow3).toEqual(null);
      expect(game.frameBonusType).toEqual('none');
    });

    it('1 frame - 2 throws, spare', () => {      
      game.setCurrentFrame(1);
      game.throw1(5);
      game.throw2(5);
      game.setThrowsTotalScore();
      game.setFrameBonusType();

      expect(game.currentFrame).toEqual(1);
      expect(game.frameScore).toEqual(10);
      expect(game.frameThrow1).toEqual(5);
      expect(game.frameThrow2).toEqual(5);
      expect(game.frameThrow3).toEqual(null);
      expect(game.frameBonusType).toEqual('spare');
    });

    it('1 frame - 1 throw, strike', () => {      
      game.setCurrentFrame(1);
      game.throw1(10);
      game.setThrowsTotalScore();
      game.setFrameBonusType();

      expect(game.currentFrame).toEqual(1);
      expect(game.frameScore).toEqual(10);
      expect(game.frameThrow1).toEqual(10);
      expect(game.frameThrow2).toEqual(null);
      expect(game.frameThrow3).toEqual(null);
      expect(game.frameBonusType).toEqual('strike');
    });
  });

  


  // 2 frames - frame 1 spare, adds frame 2's throw1 to frame 1 score
  // 2 frames - frame 1 strike, adds frame 2's throw1 and throw2 to frame 1 score
  // mock previous frame bonus type?
  // method to check prev frame bonus and use updateFrameScore(points)

});
