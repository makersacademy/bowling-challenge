describe('Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  describe('initialize', function() {
    it('has 10 frames', function() {
      expect(game.NUMBER_OF_FRAMES).toEqual(10);
    });

    // it('has 2 rolls per frame', function() {
    //   expect(game.rollsPerFrame).toEqual(2);
    // });

    it('has 10 pins per frame', function() {
      expect(game.NUMBER_OF_PINS).toEqual(10);
    });

    it('records the frame number', function() {
      game.addScore(5);
      game.addScore(5);
      expect(game.frame).toEqual(2);
    });

    it('records the frame number when rolling a strike', function() {
      game.addScore(10);
      expect(game.frame).toEqual(2);
    });
  });

  describe('addScore', function() {
    it('limits the number of scores', function() {
      for (var i = 0; i < 12; i++) {
        game.addScore(10);
      }
      expect(function() {game.addScore(5)}).toThrow(new Error("Cannot add more scores."));
    });

    it('limits the number of pins', function() {
      game.addScore(7);
      expect(function() {game.addScore(5)}).toThrow(new Error("Number of pins in frame cannot be above 10."));
    });

    it('limits the number of pins in a frame', function() {
      game.addScore(5);
      game.addScore(3);
      expect(function() {game.addScore(8)}).not.toThrow(new Error("Number of pins in frame cannot be above 10."));
    });

    it('gives the player an extra roll on the 10th frame if they get a strike', function() {
      for (var i = 0; i < 9; i++) {
        game.addScore(10);
      }
      game.addScore(10);
      game.addScore(3);
      expect(function() {game.addScore(3)}).not.toThrow(new Error("Cannot add more scores."));
    });

    it('gives the player an extra roll on the 10th frame if they get a spare', function() {
      for (var i = 0; i < 9; i++) {
        game.addScore(10);
      }
      game.addScore(5);
      game.addScore(5);
      expect(function() {game.addScore(3)}).not.toThrow(new Error("Cannot add more scores."));
    });

    it("does not give the player an extra roll on the 10th frame if they don't get a strike or spare", function() {
      for (var i = 0; i < 9; i++) {
        game.addScore(10);
      }
      game.addScore(3);
      game.addScore(3);
      expect(function() {game.addScore(3)}).toThrow(new Error("Cannot add more scores."));
    });
  });

  describe('pushFrame', function() {
    it('creates a frame object and stores it in the scores array', function() {
      game.addScore(4);
      game.addScore(3);
      expect(game.scores.array[0]).toEqual(jasmine.any(Frame));
    });
  });

  describe('totalScore', function() {
    it('returns the total score of a game', function() {
      for (var i = 0; i < 12; i++) {
        game.addScore(10);
      }
      game.calculateFrameScore();
      game.calculateBonus();
      game.frameTotalScore();
      game.gameTotalScore();
      expect(game.gameScore).toEqual(300);
    });
  });
});
