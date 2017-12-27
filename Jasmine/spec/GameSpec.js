describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes with a score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('initializes with an array of frames', function() {
    expect(game.frames).toEqual(jasmine.any(Array));
  });

  it('initializes with 10 frames', function() {
    expect(game.frames.length).toEqual(10);
  });

  it('should list the current frame', function() {
    expect(game.currentFrame().frameNumber).toEqual(0);
  });

  it('should advance to the next frame', function() {
    game.advanceFrame()
    expect(game.currentFrame().frameNumber).toEqual(1);
  });

});
