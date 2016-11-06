describe('BowlingGame', function () {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame()
  });

  it('can roll gutter game', function () {
    rollMany(0, 20);
    expect(bowlingGame.score()).toBe(0);
  });

  it('can roll all ones', function () {
    rollMany(1, 20);
    expect(bowlingGame.score()).toBe(20);
  });

  it('can roll a spare', function () {
    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(4);
    rollMany(0, 17);
    expect(bowlingGame.score()).toBe(18)
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowlingGame.roll(pins);
    }
  };
});
