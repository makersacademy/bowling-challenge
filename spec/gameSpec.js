describe('Game', function() {

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame();
  })

  it('starts with a frame', function() {
    expect(game._frames[0]).toEqual(frame);
  })

  it('game can return current frame', function() {
    expect(game.currentFrame()).toEqual(frame);
  })
})