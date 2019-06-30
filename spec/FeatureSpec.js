describe('Scoreboard', function() {
  var game;
  var frameOne;
  var frameTwo;
  var scoreboard;

  beforeEach(function() {
    game = new Game();
    frameOne = new Frame();
    frameTwo = new Frame();
    scoreboard = new Scoreboard();
  });

  it('opens with 10 frames', function() {
    expect(game.frames).toEqual(10);
  });

  it()
});