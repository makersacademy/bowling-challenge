
describe('Initialize', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    });

    it ('totalScore is initialized with 0', function() {
      expect(game.totalScore).toEqual(0);
  });

    it ('pins is initialized with 10', function() {
    expect(game.pins).toEqual(10)

    });
    it ('frames is initialized with an empty array', function() {
      expect(game.frames).toEqual([]);
    });

    it ('frame is initialized with 1', function() {
      expect(game.frame).toEqual(1);
    });

    it ('roll is initialized with 1', function() {
      expect(game.roll).toEqual(1);
    });

    describe('addScore', function() {
    it ('firstRoll adds the pins knocked to the totalScore', function() {
      game.firstRoll(5);
      expect(game.totalScore).toEqual(5);
    });

    it ('secondRoll adds the pins knocked to the totalScore', function() {
      game.secondRoll(5);
      expect(game.totalScore).toEqual(5);
    });
  });

  describe('documentFirstRound', function() {
  it ('documentFirstRound creates an array with scorecard', function() {
    game.firstRoll(5);
    expect(game.frames).toEqual([[1, 1, 5, 5, "Well done!"]]);
  });
});

  describe('reset', function() {
    it ('reset method resets frame, roll and pins when called', function() {
      game.secondRoll(5);
      expect(game.frame).toEqual(2);
      expect(game.roll).toEqual(1);
      expect(game.pins).toEqual(10);
    });
  });

  describe('firstRoll', function() {
  it ('reduces the number of pins knocked down', function() {
    game.firstRoll(5);
    expect(game.pins).toEqual(5);
  });

  it ('changes roll to 2 when being called', function() {
    game.firstRoll(5);
    expect(game.roll).toEqual(2);
  });
  });



});
