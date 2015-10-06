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

  it('keeps a track of the total score', function() {
    game.score(5, 5);
    frame = new Frame();
    game.score(5, 5);
    expect(game.totalGameScore).toEqual(20);
  });

  it('counts the number of frames', function() {
    game.score(5, 5);
    frame = new Frame;
    game.score(5, 5);
    expect(game.frameCount).toEqual(2);
  });



});
