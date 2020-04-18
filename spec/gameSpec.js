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

  it('can bowl a ball', function() {
    expect(game.bowlBall()).toBeDefined;
  })

  it('can get frame score', function() {
    expect(game.getFrameScore()).toEqual(0);
  })

  it('when a ball is bowled frame score is updated', function() {
    game.bowlBall(2)
    expect(game.getFrameScore()).toEqual(2)
  })
})