describe('Game', function() {

  var game;
  beforeEach(function() {
    game = new Game();
    frame = {};
  });

  it('starts with no frames', function() {
    expect(game.frameList.length).toBe(0);
  });

  it('can have frames appended', function() {
    game.addFrame(frame);
    expect(game.frameList.length).toBe(1);
  });

});
