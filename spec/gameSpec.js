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
    expect(game._currentFrame()).toEqual(frame);
  })

  it('can get frame score', function() {
    expect(game.getFrameScore()).toEqual(0);
  })

  it('when a ball is bowled frame score is updated', function() {
    game.bowlBall(2);
    expect(game.getFrameScore()).toEqual(2)
  })

  it('can return frame number', function() {
    expect(game.getFrameCount()).toEqual(1)
  })

  it('can add a new frame', function(){
    game._addFrame();
    expect(game.getFrameCount()).toEqual(2)
  })

  it('frame number is updated when frame created', function() {
    game.bowlBall(2);
    game.bowlBall(5);
    expect(game.getFrameCount()).toEqual(2)
  })

  it('game score is a total of frame scores', function(){
    game.bowlBall(2);
    game.bowlBall(5);
    game.bowlBall(9);
    game.bowlBall(0);
    expect(game.getScore()).toEqual(16)
  })

  it('a strike creates a bonus score', function(){
    game.bowlBall(10);
    expect(game._applyBonus).toEqual(true)
  })

  it('a bonus score is calculated', function(){
    game.bowlBall(10);
    game.bowlBall(2);
    game.bowlBall(5);
    expect(game.getBonusScore()).toEqual(7)
  })

})