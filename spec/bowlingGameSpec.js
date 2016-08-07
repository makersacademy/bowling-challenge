describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('accepts score from the player', function() {
    game.frameBowls(1,2);
    expect(game.frameResult()).toEqual([[1,2]]);
  });

  it('calculates the score', function() {
    game.frameBowls(1,2);
    game.frameBowls(3,4);
    expect(game.score()).toEqual(10);
  });

  // it('does not accept bowls less than 0 or greater than 10', function () {
  //   expect(game.frameBowls(-1,11).toRaise(
  // });
});
