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

  it('a game begins on frame 1', function() {
    expect(game._frame).toEqual(1);
  });

  it('frame number is inremented at the end of every frame', function() {
    game.nextFrame();
    expect(game._frame).toEqual(2);
  });



});
