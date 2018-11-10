describe("Bowling", function() {
  var game;

  beforeEach(function () {
    game = new Game()
  })

  it('can track rolls', function () {
    game.roll(1)
    expect(game.rolls).toEqual([1]);
  })

  it('can track the total score of the game', function() {
    game.roll(2);
    expect(game.totalScore()).toEqual(2);
  })

  it('can roll a gutter game', function() {
    rollMultiple(0, 20);
    expect(game.totalScore()).toEqual(0);
  })

  it('can score a game of all ones', function() {
    rollMultiple(1, 20);
    expect(game.totalScore()).toEqual(20);
  })

  it('returns true if spare is scored', function() {
    game.roll(5);
    game.roll(5);
    expect(game.isSpare(0)).toBe(true);
  })

  it('returns false if not a spare', function() {
    game.roll(5);
    game.roll(4);
    expect(game.isSpare(0)).toBe(false);
  })

  it('can calculate score of spare frame', function() {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMultiple(0, 16);
    expect(game.totalScore()).toEqual(12);
  })

  it('returns true if strike scored', function() {
    game.roll(10);
    expect(game.isStrike(0)).toBe(true);
  })

  it('returns false if strike not scored', function() {
    game.roll(7);
    game.roll(1);
    expect(game.isStrike(0)).toBe(false);
  })

  it('calculates the score of strike frame', function() {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    rollMultiple(0, 15);
    expect(game.totalScore()).toEqual(16);
  })

  it('can calculate score for perfect game', function() {
    rollMultiple(10, 12);
    expect(game.totalScore()).toEqual(300);
  })

  var rollMultiple = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
})
