describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize', function() {
    it('has 10 frames', function() {
      expect(game.NUMBER_OF_FRAMES).toEqual(10);
    });

    it('has 2 rolls per frame', function() {
      expect(game.rollsPerFrame).toEqual(2);
    });

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
      for (var i = 0; i < 10; i++) {
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
  });

  describe('pushFrame', function() {
    it('creates a frame object and stores it in the scores array', function() {
      game.addScore(4);
      game.addScore(3);
      expect(game.scores[0]).toEqual(jasmine.any(Frame));
    });
  });

  describe('calculateBonus', function() {
    it('calculates the bonus score for a spare frame', function() {
      game.addScore(5);
      game.addScore(5);
      game.addScore(5);
      game.addScore(1);
      game.calculateBonus();
      expect(game.scores[0].bonus).toEqual(5);
    });

    it('calculates the bonus score for a strike frame', function() {
      game.addScore(10);
      game.addScore(5);
      game.addScore(1);
      game.calculateBonus();
      expect(game.scores[0].bonus).toEqual(6);
    });

    it('calculates the bonus score for 2 strike frames in a row', function() {
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      game.addScore(1);
      game.calculateBonus();
      expect(game.scores[0].bonus).toEqual(11);
      expect(game.scores[1].bonus).toEqual(2);
    });

    it('calculates the bonus score for 3 strike frames in a row', function() {
      game.addScore(10);
      game.addScore(10);
      game.addScore(10);
      game.addScore(1);
      game.addScore(1);
      game.calculateBonus();
      expect(game.scores[0].bonus).toEqual(20);
      expect(game.scores[1].bonus).toEqual(11)
      expect(game.scores[2].bonus).toEqual(2);
    });
  });
});
