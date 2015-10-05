describe('Game', function() {

  var game, frame, spare, strike;
  beforeEach(function() {
    game = new Game();
    frame = { first: 4, second: 5,
      isSpare: function() { return false; },
      isStrike: function() { return false; }
    };
    spare = { first: 4, second: 6,
      isSpare: function() { return true; },
      isStrike: function() { return false; }
    };
    strike = { first: 10,
      isSpare: function() { return false; },
      isStrike: function() { return true; }
    };
  });

  describe('starts with', function(){
    it('an empty frame list', function() {
      expect(game.frameList.length).toBe(0);
    });
    it('an empty frame score list', function() {
      expect(game.frameScore.length).toBe(0);
    });
    it('a null game score', function() {
      expect(game.score).toBe(null);
    });
  });

  describe('when frame is added', function(){
    it('appends it to the list', function() {
      game.addFrame(frame);
      expect(game.frameList.length).toBe(1);
    });
    it('calculates score if not spare/strike', function() {
      game.addFrame(frame);
      expect(game.frameScore[0]).toBe(9);
    });
    it('delays scoring spares', function() {
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(null);
    });
    it('delays scoring strikes', function() {
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(null);
    });
  });

});
