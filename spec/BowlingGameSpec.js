describe('The Bowling Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  var rollManyTimes = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

describe('', function() {

  it('can roll a gutter game', function() {
    rollManyTimes(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    rollManyTimes(1, 20);
    expect(game.score()).toEqual(20);
  });

});



});
