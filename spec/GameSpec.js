describe('Game', function() {
  let Game = require('./../lib/Game');
  let game,fakeFrame0, fakeFrame1, fakeFullFrameArray;

  beforeEach(function() {
    game = new Game();

    fakeFrame0 = {
      score: function() {
        return 0;
      },
      isFull: function() {
        return false;
      },
      addRound: function(round) {
        return
      },
      isStrike: function() {
        return false;
      },
      bonusScore: function() {
        return 0
      }
    };

    fakeFrame1 = {
      score: function() {
        return 0;
      },
      bonusScore: function() {
        return 0
      }
    };
  });

  describe('initial', function() {
    it('should have a totalScore of 0', function() {
      expect(game._totalScore).toEqual(0);
    });

    it('should be able to store frames in a frames array', function() {
      game = new Game([fakeFrame0, fakeFrame1])
      expect(game._frames).toEqual([fakeFrame0, fakeFrame1]);
    });

    it('should have a currentFrameIndex of 0', function() {
      expect(game._currentFrameIndex).toEqual(0);
    });
  });

  describe('currentFrame', function() {
    it('returns the current frame array', function() {
      game = new Game([fakeFrame0, fakeFrame1])
      expect(game.currentFrame()).toEqual(fakeFrame0);
    });
  });

  describe('isFull()', function() {
    it('returns true or false depending if the game is full', function() {
      expect(game.isFull()).toEqual(false);

      fakeFullFrameArray = [];
      for (let i = 0; i <= 10; i++) {
        fakeFullFrameArray.push(fakeFrame0);
      };

      game = new Game(fakeFullFrameArray);
      expect(game.isFull()).toEqual(true);
    });
  });

  describe('score', function() {
    it('returns the currrent score for the game', function() {
      spyOn(fakeFrame0, 'score').and.returnValue(5);
      spyOn(fakeFrame1, 'score').and.returnValue(5);
      game = new Game([fakeFrame0, fakeFrame1]);

      expect(game.score()).toEqual(10);
    });
  });

// // TODO: Need a better test for this function
//   describe('roll', function() {
//     it('stores new round with the given score inside of a frame', function() {
//       spyOn(fakeFrame0, 'score').and.returnValue(6);
//       game = new Game([fakeFrame0]);
//       game.roll(6);
//
//       expect(game.currentFrame().score()).toEqual(6);
//     });
//
//     it('enters score into another frame if previous frame contained a strike', function() {
//       spyOn(fakeFrame0, 'score').and.returnValue(10);
//       spyOn(fakeFrame1, 'score').and.returnValue(5);
//       game = new Game([fakeFrame0, fakeFrame1]);
//         game.roll(10);
//         game.roll(5);
//
//         console.log(game.currentFrame());
//
//       expect(game.currentFrame().score()).toEqual(5);
//     });
//   });
});
