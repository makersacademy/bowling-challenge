describe('Bowl', function() {

  describe('bowling a ball', function() {

    beforeEach(function() {
      bowl = new Bowl();
    });

    it('player can roll a gutter ball', function() {
      bowl.roll(0)
      expect(bowl.rolls).toEqual([0]);
    });

    it('player can roll a ball and score 1', function() {
      bowl.roll(1)
      expect(bowl.rolls).toEqual([1]);
    });

    it('player can roll 2 balls and score 2', function() {
      bowl.roll(1)
      bowl.roll(1)
      expect(bowl.rolls).toEqual([1, 1]);
    });

    it('can roll two frames ie four shots knocking 1 pin each time', function() {
      for (i = 0; i < 4; i++) {
        bowl.roll(1);
      };
      expect(bowl.rolls).toEqual([1, 1, 1, 1]);
    });

  });

});

describe('Game', function() {

  describe('seeing the score', function() {

    beforeEach(function() {
      game = new Game();
      bowl = new Bowl();
    });

    var fullGame = function (skittles, rolls) {
      for (i = 0; i < rolls; i++) {
        bowl.roll(skittles);
      };
    };

    it('can play a full game scoring 0 points', function () {
      fullGame(0, 20);
      total = game.score();
      expect(total).toEqual(0);
    });

    it('can play a full game scoring 20 points', function() {
      fullGame(1, 20);
      total = game.score();
      expect(total).toEqual(20);
    });

  });

});

describe('Spares', function() {

  beforeEach(function() {
    game = new Game();
    bowl = new Bowl();
  });

  var fullGame = function (skittles, rolls) {
    for (i = 0; i < rolls; i++) {
      bowl.roll(skittles);
    };
  };

  it('knows the first roll', function() {
    bowl.roll(1)
    expect(bowl.rolls[0]).toEqual(1);
  });

  it('knows the second roll', function() {
    bowl.roll(5)
    bowl.roll(5)
    expect(bowl.rolls[1]).toEqual(5);
  });

  it('has a full array of 20 for full game', function() {
    fullGame(10, 20);
    expect(bowl.rolls.length).toEqual(20);
  });

  it('rolls a spare', function() {
    bowl.roll(5);
    bowl.roll(5);
    bowl.roll(5);
    fullGame(0, 17);
    total = game.score()
    expect(total).toEqual(20);
  });

});

describe('Strikes', function() {

  beforeEach(function() {
    game = new Game();
    bowl = new Bowl();
  });

  var fullGame = function (skittles, rolls) {
    for (i = 0; i < rolls; i++) {
      bowl.roll(skittles);
    };
  };

  it('rolls a strike on first roll', function() {
    bowl.roll(10);
    bowl.roll(4);
    bowl.roll(3);
    fullGame(0, 16);
    total = game.score();
    expect(total).toEqual(24);
  });

  it('rolls two strikes', function() {
    bowl.roll(10);
    bowl.roll(4);
    bowl.roll(3);
    bowl.roll(10);
    bowl.roll(4);
    bowl.roll(3);
    fullGame(0, 12);
    total = game.score();
    expect(total).toEqual(48);
  });

  it('can play a perfect game', function() {
    fullGame(10, 20);
    total = game.score();
    expect(total).toEqual(300);
  });

});
