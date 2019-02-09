describe('BowlingGutterGame', function() {

  var game;

  beforeEach(function() {
    game = new Game
  });

  it('game has an initial score of 0 in frame 1', function() {
    expect(game.score).toEqual(0)
    expect(game.frame).toEqual(1)
  });

});
