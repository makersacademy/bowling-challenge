describe('Game', function() {
  var frameCount = 0;
  var totalGameScore = 0;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('allows you to add a score to a game', function() {
    game.score(5, 5);
    expect(game.totalGameScore).toEqual(10);
  });

  it('counts the number of frames', function() {
    game.score(5, 5);
    frame = new Frame;
    game.score(5, 5);
    expect(game.frameCount).toEqual(2);
  });

  it('adds the sum of the current frame as a bonus if the prevous frame was a strike', function() {
    game.score(10, 0);
    frame = new Frame;
    game.score(1, 2);
    expect(game.totalGameScore).toEqual(16);
  });

});
