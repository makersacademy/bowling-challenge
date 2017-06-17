describe('Feature', function() {


  var game = new Game
  beforeEach(function () {
    game.fullFrame(new Frame)
  });

  it('displays the score of the first bowl', function() {
    game.roll(0, 0)
    game.updateGameScores();
  });
})
