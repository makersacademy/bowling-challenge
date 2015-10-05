describe('Game', function () {

  var game, frame, spare, strike;
  beforeEach(function () {
    game = new Game();
    frame = { first: 4, second: 5,
      isSpare: function () { return false; },
      isStrike: function () { return false; }
    };
    spare = { first: 6, second: 4,
      isSpare: function () { return true; },
      isStrike: function () { return false; }
    };
    strike = { first: 10,
      isSpare: function () { return false; },
      isStrike: function () { return true; }
    };
  });

  describe('starts with', function () {
    it('an empty frame list', function () {
      expect(game.frameList.length).toBe(0);
    });
    it('an empty frame score list', function () {
      expect(game.frameScore.length).toBe(0);
    });
    it('a null game score', function () {
      expect(game.score).toBe(null);
    });
  });

  describe('when normal frame is added', function () {
    it('appends it to the list', function () {
      game.addFrame(frame);
      expect(game.frameList.length).toBe(1);
    });
    it('calculates its score', function () {
      game.addFrame(frame);
      expect(game.frameScore[0]).toBe(9);
    });
    it('scores a previous spare', function () {
      game.addFrame(spare);
      game.addFrame(frame);
      expect(game.frameScore[0]).toBe(14);
    });
    it('scores a previous strike', function () {
      game.addFrame(strike);
      game.addFrame(frame);
      expect(game.frameScore[0]).toBe(19);
    });
    it('scores a previous double strike', function () {
      game.addFrame(strike);
      game.addFrame(strike);
      game.addFrame(frame);
      expect(game.frameScore[0]).toBe(24);
    });
  });

  describe('when spare is added', function () {
    it('appends it to the list', function () {
      game.addFrame(spare);
      expect(game.frameList.length).toBe(1);
    });
    it('delays calculating its score', function () {
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(null);
    });
    it('scores a previous spare', function () {
      game.addFrame(spare);
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(16);
    });
    it('scores a previous strike', function () {
      game.addFrame(strike);
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(20);
    });
    it('scores a previous double strike', function () {
      game.addFrame(strike);
      game.addFrame(strike);
      game.addFrame(spare);
      expect(game.frameScore[0]).toBe(26);
    });
  });

  describe('when strike is added', function () {
    it('appends it to the list', function () {
      game.addFrame(strike);
      expect(game.frameList.length).toBe(1);
    });
    it('delays calculating its score', function () {
      game.addFrame(strike);
      expect(game.frameScore[0]).toBe(null);
    });
    it('scores a previous spare', function () {
      game.addFrame(spare);
      game.addFrame(strike);
      expect(game.frameScore[0]).toBe(20);
    });
    it('delays scoring a previous strike', function () {
      game.addFrame(strike);
      game.addFrame(strike);
      expect(game.frameScore[0]).toBe(null);
    });
    it('scores a previous double strike', function () {
      game.addFrame(strike);
      game.addFrame(strike);
      game.addFrame(strike);
      expect(game.frameScore[0]).toBe(30);
    });
  });

  describe('calculates the game score', function () {
    beforeEach(function () {
      for (var i = 0; i < 9; i++) { game.addFrame(frame) }
    });
    it('after frame 10 if frame 10 is normal', function () {
      expect(game.score).toBe(null);
      game.addFrame(frame);
      expect(game.score).toBe(90);
    });
    it('after frame 11 if frame 10 is spare', function () {
      game.addFrame(spare);
      expect(game.score).toBe(null);
      game.addFrame(frame);
      expect(game.score).toBe(95);
    });
    it('after frame 11 if frame 10 is strike and 11 is normal', function () {
      game.addFrame(strike);
      expect(game.score).toBe(null);
      game.addFrame(frame);
      expect(game.score).toBe(100);
    });
    it('after frame 11 if frame 10 is strike and 11 is spare', function () {
      game.addFrame(strike);
      expect(game.score).toBe(null);
      game.addFrame(spare);
      expect(game.score).toBe(101);
    });
    it('after frame 12 if frame 10 is strike and 11 is strike', function () {
      game.addFrame(strike);
      game.addFrame(strike);
      expect(game.score).toBe(null);
      game.addFrame(frame);
      expect(game.score).toBe(105);
    });
  });

});
