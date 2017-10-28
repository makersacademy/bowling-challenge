describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('starts game with all frames empty', function() {
    var game = bowlingGame.game();
    expect(game.length).toEqual(0);
  });


});
