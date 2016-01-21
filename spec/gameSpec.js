describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('#setGame', function() {
    it('generates a default number of frame', function() {
      expect(game.frames.length).toEqual(game.gameFrames);
    });
    it('set the nextFrame attribute of every frame with the following frame',
      function() {
        expect(game.frames[0].nextFrame).toEqual(game.frames[1]);
      }
    );
    it('generates the last frame calling the LastFrame constructor',
      function() {
        var lastFrame = game.frames[game.gameFrames-1]
        expect(lastFrame.constructor).toEqual(game.lastFrameKlass);
      }
    );
    it('set currentFrame to the first frame', function() {
      expect(game.currentFrame).toEqual(game.frames[0]);
    });
  });

  describe('#roll', function() {
    it('throws an error if trying to roll when game is over', function() {
      for (var i = 0; i < game.gameFrames; i++) {
        spyOn(game.frames[i], 'isStrike').and.returnValue(true);
        game.roll();
      }
      game.roll();
      game.roll();
      expect( function(){ game.roll(); } ).toThrowError('Game over');
    });
    it('records a roll for the currentFrame', function() {
      game.roll(1);
      expect(game.currentFrame.score()).toEqual(1);
    });
    it('change the current frame if the previous is over', function() {
      var nextFrame = game.currentFrame.nextFrame;
      game.roll(0);
      game.roll(0);
      expect(game.currentFrame).toEqual(nextFrame);
    });
  });

  describe('#score', function() {
    beforeEach(function() {
      game.roll(0);
      game.roll(0);
      game.roll(1);
    });
    it('returns the total score at the current frame if no arg is passed',
      function() {
        expect(game.score()).toEqual(1);
      }
    );
    it('returns the total score at the frame specified', function() {
      expect(game.score(1)).toEqual(0);
    });
  });

  describe('#isOver', function() {
    it('returns true if the game is over', function() {
      for (var i = 0; i < game.gameFrames; i++) {
        spyOn(game.frames[i], 'isStrike').and.returnValue(true);
        game.roll();
      }
      game.roll();
      game.roll();
      expect(game.isOver()).toBe(true);
    });
  });

  describe('#currentFrameNumber', function() {
    it('returns the number of the frame that is active', function() {
      spyOn(game.frames[0], 'isStrike').and.returnValue(true);
      game.roll();
      expect(game.currentFrameNumber()).toEqual(2);
    });
  });

});
