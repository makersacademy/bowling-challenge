describe ('Bowling Game Scoreboard', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  function rollsLeft(pins, rolls) {
    for (var i = 0; i <= rolls; i ++) {
      game.roll(pins);
    }
  }

  it ('shows a gutter game (no pins hit per game)', function () {
    rollsLeft(0, 20);
    expect(game.score()).toEqual(0);
  });

  it ('shows only one pin hit per game', function() {
    rollsLeft(1, 20);
    expect(game.score()).toEqual(20);
  });

  it ('shows a spare', function() {
    game.roll(6);
    game.roll(4);
    game.roll(5);
    rollsLeft(0, 17);
    expect(game.score()).toEqual(20);
  });

  it ('shows a strike', function() {
    game.roll(10);
    game.roll(3);
    game.roll(6);
    rollsLeft(0, 16);
    expect(game.score()).toEqual(28);
  });

  it ('shows a perfect game', function() {
    rollsLeft(10, 20);
    expect(game.score()).toEqual(300);
  });

});
