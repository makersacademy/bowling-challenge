describe('Score', function() {

  var score;
  var pins;
  var game;

  beforeEach(function() {
    game = new Game();
    pins = new Pins();
    game.throwFirstBall(pins.pinsDownFirstThrow);
    game.throwSecondBall(pins.pinsDownSecondThrow());
    score = new Score(game._frames, game._currentRound);
  });

  it('sums up score for first frame', function() {
    console.log(game)
    console.log(game._frames)
    console.log(game._currentRound)
    console.log(score)
    console.log(score._currentScore)
    expect(score._currentScore).toBe(game._frames[0][0] + game._frames[0][1]);
  });
});
