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
    game.roll(1);
    expect(game.isSpare(0)).toBe(true);
  })

  it('returns false if not a spare', function() {
    game.roll(5);
    game.roll(4);
    game.roll(1);
    expect(game.isSpare(0)).toBe(false);
  })

  it('can calculate score of spare frame', function() {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMultiple(0, 16);
    expect(game.totalScore()).toEqual(12);
  })

  var rollMultiple = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
})
