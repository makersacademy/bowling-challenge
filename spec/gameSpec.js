describe('Game', function() {

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  it('starts with a frame', function() {
    expect(game._frames[0]).toEqual(frame);
  })

  it('can return current frame', function() {
    expect(game.currentFrame()).toEqual(frame);
  })

  it('can get frame score', function() {
    expect(game.getFrameScore()).toEqual(0);
  })

  it('when a ball is bowled frame score is updated', function() {
    game.bowlBall(2)
    expect(game.getFrameScore()).toEqual(2)
  })

  it('can return frame number', function() {
    expect(game.getFrameCount()).toEqual(0)
  })
})