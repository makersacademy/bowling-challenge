describe('game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('can roll gutter game', function () {
    multiple(0, 20)
    expect(game.finalScore()).toBe(0)
  });

  it('can roll all ones', function () {
    multiple(1, 20)
    expect(game.finalScore()).toBe(20);
  });

  it('can roll a spare', function () {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    multiple(0,17);
    expect(game.finalScore()).toBe(16)
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    multiple(0, 16)
    expect(game.finalScore()).toBe(24)
  });

  it('can roll a perfect game', function() {
    multiple(10,12)
    expect(game.finalScore()).toBe(300)
  });

  it('cannot let a frame contain rolls greater than 10 in total', function() {
    multiple(9,2)
    expect(game.frame).toEqual([9])
  });

  var multiple = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

});
