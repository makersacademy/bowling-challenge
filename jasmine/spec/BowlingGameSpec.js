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

  it('can roll a strike', function () {
    bowlingGame.roll(10);
    bowlingGame.roll(3);
    bowlingGame.roll(5);
    rollMany(0, 16);
    expect(bowlingGame.score()).toBe(26)
  });

  it('can roll a perfect game', function () {
    rollMany(10, 12);
    expect(bowlingGame.score()).toBe(300)
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowlingGame.roll(pins);
    }
  };
});
