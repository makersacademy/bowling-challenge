describe ("Game", function() {
  var game;
  var frame;
  var pins;

  beforeEach(function() {
    frame = new Frame()
    game = new Game(frame)
    pins = 5
  })

  xit('starts a new game with an empty scoreboard', function() {
    expect(game.currentScore()).toEqual(0);
  })

  it('holds the current frame', function(){
    expect(game.currentFrame).toBe(frame)
  })

  it('is a gutter game', function() {
    for(i = 0 ; i <= 20; i++) {
      frame.roll(0);
      frame.roll(0);
      game.addFrame()}
    expect(game.currentScore()).toEqual(0)
  })

  xit('adds frame score to index when frame complete', function() {
    frame.roll(pins)
    frame.roll(pins)
    game.addFrame()
    expect(game._frames).toEqual([10])
  })


});

// if array has 2 then add no more rolls, move onto next.
