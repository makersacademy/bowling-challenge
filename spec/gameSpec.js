describe ("Game", function() {
  var game  = new Game();
  var frame = 'frame';

  it('starts a new game with an empty scoreboard', function() {
    expect(game.scoreboard).toEqual([]);
  })

  it('adds a frame to the scoreboard', function () {
    game.addFrame(frame)
    expect(game.scoreboard).toEqual([frame])
  })

});
