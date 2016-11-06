describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a total score of zero', function() {
    expect(game.getTotalScore()).toEqual(0);
  });

});
