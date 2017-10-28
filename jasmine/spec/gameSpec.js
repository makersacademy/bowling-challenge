describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('starts game with all frames empty', function() {
    var game = bowlingGame.game();
    expect(game.length).toEqual(0);
  });

  it('allows score keeper to add number of pins knocked to a frame', function() {
    bowlingGame.addToFrame(8);
    expect(bowlingGame.frame()).toEqual([8]);
  });


});
