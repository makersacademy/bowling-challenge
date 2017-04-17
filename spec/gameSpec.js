
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
      expect(game.message).toEqual(false);
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
    expect(game.frames).toEqual([[1, 1, 5, 5, "Good job!"]]);
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

  describe('getMessage', function() {
  it ('message to be "Unlucky" when score is 0', function() {
    game.firstRoll(0);
    expect(game.message).toEqual("Unlucky");
  });
  it ('message to be "Better luck next time!" when score is between 1 and 3', function() {
    for (var number = 1; number < 4; number++) {
      game.getMessage(number);
    } expect(game.message).toEqual("Better luck next time!");
  });

  it ('message to be "Good job"!" when score is between 4 and 7', function() {
    for (var number = 4; number < 8; number++) {
      game.getMessage(number);
    } expect(game.message).toEqual("Good job!");
  });

  it ('message to be "Awesome!" when score is between 8 and 10', function() {
    for (var number = 8; number < 11; number++) {
      game.getMessage(number);
    } expect(game.message).toEqual("Awesome!");
  });
  });
});
