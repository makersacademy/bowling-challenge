describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
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
    game.advanceFrame();
    expect(game.currentFrame().frameNumber).toEqual(1);
  });

  it('should have a score of 0', function() {
    expect(game.calculateTotalScore()).toEqual(0);
  });

  it('should update roll of the current frame', function() {
    var currentFrame = game.currentFrame();
    spyOn(currentFrame, 'roll');
    game.currentMove(4);
    expect(currentFrame.roll).toHaveBeenCalledWith(4);
  });

  it('should calculate score of all frames', function() {
    var frameOne = game.currentFrame();
    game.advanceFrame();
    var frameTwo = game.currentFrame();
    spyOn(frameOne, 'calculateScore').and.returnValue(2);
    spyOn(frameTwo, 'calculateScore').and.returnValue(4);
    expect(game.calculateTotalScore()).toEqual(6);
  });

  it('should advance to the next frame once frame is finished', function() {
    var currentFrame = game.currentFrame();
    spyOn(currentFrame, 'isFinished').and.returnValue(true);
    game.currentMove(4);
    game.currentMove(4);
    expect(game.currentFrameIndex).toEqual(1);
  });
  
});
