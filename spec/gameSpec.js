'use strict';
describe('Game', function(){
  var game;

  beforeEach( function(){
    game = new Game();
  });

  describe ('errors', function(){
    it('throws an error if points entered are less than 0', function(){
      expect(function(){game.roll(-1);}).toThrowError("Invalid roll: points must be between 0-10");
    });

    it('throws an error if points entered are greater than 10', function(){
      expect(function(){game.roll(11);}).toThrowError("Invalid roll: points must be between 0-10");
    });

    it('throws an error if points entered are greater than the pins remaining', function(){
      game.roll(3);
      expect(function(){game.roll(8);}).toThrowError("Invalid roll: only 7 pins remaining");
    });

    it('finishes once each player has completed 20 rolls', function(){
      for(var i=0; i<20; i++) {
        game.roll(1);
      }
      expect(function(){game.roll(1);}).toThrowError("The game has finished. Start a new game to throw again.");
    });
  });

  describe ('rolls', function(){
    it('returns the next roll number of each frame e.g. the 1st roll', function(){
      expect(game.getNextRoll()).toEqual(1);
    });

    it('returns the next roll number of each frame e.g. the 2nd roll', function(){
      game.roll(1);
      expect(game.getNextRoll()).toEqual(2);
    });
  });

  describe ('frames', function(){

    it('each frame conists of two rolls per player', function(){
      for(var i=0; i<3; i++) {
        game.roll(1);
        game.roll(4);
      }
      expect(game.frameHistory).toEqual([[1,4],[1,4],[1,4]]);
    });

    it('returns the current frame number', function(){
      for(var i=0; i<2; i++) {
        game.roll(1);
      }
      expect(game.getFrameNumber()).toEqual(2);
    });

    it('returns the status of the current frame', function(){
      game.roll(8);
      game.roll(1);
      game.roll(2);
      expect(game.currentFrame).toEqual([2]);
    });

    it('each new frame starts empty', function(){
      game.roll(8);
      game.roll(1);
      expect(game.currentFrame).toEqual([]);
    });
  });

  describe ('pins', function(){
    it('each frame begins with 10 pins', function(){
      expect(game.pinsRemaining).toEqual(10);
    });

    it('returns the number of pins remaining', function(){
      game.roll(1);
      expect(game.pinsRemaining).toEqual(9);
    })
  });

  describe ('score', function(){
    it('records the player\'s score', function(){
      game.roll(1);
      expect(game.currentFrame).toEqual([1]);
    });

    it('returns the score of the current frame\'s first roll', function(){
      game.roll(3);
      expect(game.getFirstRollScore()).toEqual(3);
    });

    it('returns the score of the current frame\'s second roll', function(){
      game.roll(6);
      game.roll(3);
      expect(game.getSecondRollScore()).toEqual(3);
    });

    it('calculates the score of the frame specified', function(){
      game.roll(1);
      game.roll(5);
      expect(game.previousFrameScore).toEqual(6);
    });

    it('calculates the score of the frame specified', function(){
      game.roll(1);
      game.roll(5);
      expect(game.calculateFrameScore(1)).toEqual(6);
    });

    it('updates the player\'s total score after each frame', function(){
      for(var i=0; i<6; i++) {
        game.roll(1);
        game.roll(4);
      }
      expect(game.totalScore).toEqual(30);
    });
  });

  describe ('bonus points', function(){
    it('recognises if a spare is acheived', function(){
      game.roll(1);
      game.roll(9);
      expect(game.isASpare()).toEqual(true);
    })

    it('recognises if a spare is acheived', function(){
      game.roll(10);
      expect(game.isAStrike()).toEqual(true);
    })
  });








});
