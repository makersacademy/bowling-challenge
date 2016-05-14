describe('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('starts with an empty score array', function() {
    expect(game._score).toEqual(0);
  });

  it('the score can be called', function() {
    expect(game.currentScore()).toEqual(0);
  });



});
