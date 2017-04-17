
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

    it ('message is initialized with false', function() {
      expect(game.message).toEqual(' ');
    });

    describe('addScore', function() {
    it ('firstRoll adds the pins knocked to the totalScore', function() {
      game.firstRoll(5);
      expect(game.totalScore).toEqual(5);
    });

    it ('secondRoll adds the pins knocked to the totalScore', function() {
      game.firstRoll(5);
      expect(game.totalScore).toEqual(5);
    });
  });

  describe('documentFirstRound', function() {
  it ('documentFirstRound creates an array with scorecard', function() {
    game.firstRoll(5);
    expect(game.frames).toEqual([[1, 1, 5, 5, ' ']]);
  });
});

  describe('documentStrike', function() {
    it ('documentStrike creates a default second roll', function() {
      game.firstRoll(10);
      expect(game.frames).toEqual([[1, 1, 10, 10, "Strike!"], [1, 2, ' ', 10, ' ']]);
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

  it ('moves to next frame when player scores a strike', function() {
    game.firstRoll(10);
    expect(game.frame).toEqual(2);
    expect(game.roll).toEqual(1);
    expect(game.pins).toEqual(10);
  });
  it ('adds strike bonus next time there is no strike', function () {
    game.firstRoll(10);
    game.firstRoll(4);
    expect(game.totalScore).toEqual(18)
  });

  it ('several strikes in a row results in bonus times that number', function () {
    game.firstRoll(10);
    game.firstRoll(10);
    game.firstRoll(4);
    game.secondRoll(4);
    expect(game.totalScore).toEqual(44)
  });

  });

  describe('secondRoll', function() {
  it ('adds a spare bonus to the next round', function() {
    game.firstRoll(5);
    game.secondRoll(5);
    game.firstRoll(3);
    game.secondRoll(4);
    expect(game.totalScore).toEqual(20);
  });
});

  describe('tenthFrame', function() {
    it ('if in the 10th frame, player can play three times', function() {
      game.tenthFrame(5);
      game.tenthFrame(5);
      game.tenthFrame(5);
      expect(game.totalScore).toEqual(15);
    });
  });
});
