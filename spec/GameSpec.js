'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = { isOver: function() {}, pinsHit: function() {}, isFinalFrameOver(){}, isStrike(){}, isSpare(){}, resetPins(){}, };
  });

  describe('bowl', function() {

    it('adds a bowl', function() {
      game.bowl(9)
      expect(game.bowlHistory).toContain(9)
    });

    it('adds the number of hits to the score', function() {
      game.bowl(9)
      expect(game.score).toEqual(9)
    });

    it('calls the frames pinsHit function', function() {
      game.frames.push(frame)
      spyOn(frame, 'pinsHit')
      game.bowl(9);
      expect(frame.pinsHit).toHaveBeenCalled()
    });

    it('returns an error after ten completed frames have been played', function() {
      for (var i = 0; i < 10; i++) {
        game.frames.push(frame);
      }
      spyOn(game.frames[9], 'isFinalFrameOver').and.returnValue(true);
      expect(function(){game.bowl(9);}).toThrow(new Error("Ten frames have been played, the game is over"))
    });

    it('changes the number of pins standing', function() {
      game.bowl(9)
      expect(game.pinsStanding).toEqual(1)
    });

    it ('resets the pins after a frame has ended', function() {
      game.bowl(5)
      game.bowl(5)
      expect(game.pinsStanding).toEqual(10)
    });
  });

  describe('current frame', function() {

    it('creates a new frame', function() {
      game.currentFrame();
      expect(game.frames.length).toEqual(1)
    });

    it('returns the current frame if there is an unfinished frame in play', function() {
      game.bowl(7);
      game.bowl(3);
      game.bowl(9);
      expect(game.currentFrame()).toEqual(game.frames[1]);
    });

    it('calls the frames isOver function', function() {
      game.frames.push(frame)
      spyOn(frame, 'isOver')
      game.currentFrame()
      expect(frame.isOver).toHaveBeenCalled()
    });
  });

  describe('frames played', function() {

    it('returns the number of frames played so far', function() {
    game.bowl(9);
    expect(game.framesPlayed()).toEqual(1)
    });
  });

  describe('last frame', function() {

    it('returns the last frame', function() {
      game.bowl(9);
      expect(game.lastFrame()).toEqual(game.frames[0]);
    });
  });

  describe('isFinalFrame', function() {

    it('returns false if it is the not last frame of the game', function() {
      game.bowl(9);
      expect(game.isFinalFrame()).toEqual(false);
    });

    it('returns true if it is the last frame of the game', function() {
      for (var i = 0; i < 10; i++) {
        game.frames.push(frame);
      }
      expect(game.isFinalFrame()).toEqual(true);
    });
  });

  describe('finalFrameScoring', function() {

    it('adds the hits of regular bowls to the score', function() {
      game.frames.push(frame)
      spyOn(frame, 'isFinalFrameOver').and.returnValue(true);
      game._finalFrameScoring(9)
      expect(game.score).toEqual(9)
    });

    it('doesnt add the hits of bonus bowls to the score', function() {
      game.frames.push(frame)
      spyOn(frame, 'isFinalFrameOver').and.returnValue(true);
      game._finalFrameScoring(10)
      spyOn(frame, 'isStrike').and.returnValue(true);
      game._finalFrameScoring(5)
      expect(game.score).toEqual(10)
    });

    it('adds bowls to the bowl history', function() {
      game.frames.push(frame)
      spyOn(frame, 'isFinalFrameOver').and.returnValue(true);
      game._finalFrameScoring(9)
      expect(game.bowlHistory).toContain(9)
    });
  });

  describe('game over', function() {

    it('returns false when the game is not over', function() {
      game.bowl(9);
      expect(game.isGameOver()).toEqual(false);
    });

    it('returns true when the game is over', function() {
      for (var i = 0; i < 10; i++) {
          game.frames.push(frame);
        }
      spyOn(game.frames[9], 'isFinalFrameOver').and.returnValue(true);
      expect(game.isGameOver()).toEqual(true);
    });
  });

  describe('scoring', function() {

    it('returns the current score', function() {
      game.bowl(9);
      game.bowl(1);
      game.bowl(8);
      game.bowl(1);
      expect(game.currentScore()).toEqual(27);
    });
  });


  describe('calculating bonus', function() {

    it('calculates the bonusus for strikes', function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(3);
      game.bowl(2);
      expect(game.strikeBonus()).toEqual(18);
    });

    it('calculates the bonus for spares', function() {
      game.bowl(1);
      game.bowl(9);
      game.bowl(5);
      expect(game.spareBonus()).toEqual(5);
    });
  });

});
