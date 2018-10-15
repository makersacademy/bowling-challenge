describe('Bowling game', function() {

  var game;

  beforeEach(function () {
    game = new Bowling();
  });

  // it('bowls a ball', function() {
  //   expect(game.roll(5)).toEqual([5]);
  // });

  it('can roll a total score for 20 bowls', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(2);
    }
    expect(game.score()).toEqual(40);
  });

  it('rolling a gutter score', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('scoring a strike', function() {
    game.roll(10);
    game.roll(2);
    game.roll(5);
    game.roll(4);
    game.roll(4);
    for (var i = 0; i < 15; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(32);
  });

  it('rolling a spare', function () {
  game.roll(4);
  game.roll(6);
  game.roll(9);
  for (var i = 0; i < 17; i++) {
    game.roll(0);
  }
  expect(game.score()).toEqual(28);
  });

});
