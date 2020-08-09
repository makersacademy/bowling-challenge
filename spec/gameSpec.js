describe('Bowling', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('Score begins at 0', function() {
    expect(game.showScore()).toEqual(0);
  });

  it('A user can bowl a whole frame', function() {
    expect(game.frame(3, 4)).toEqual([3,4]);
  });

});
