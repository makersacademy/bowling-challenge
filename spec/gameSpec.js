describe('Player', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('should start with a frame index of -1', function() {
    expect(game.frameIndex).toEqual(-1);
  });

  it('logRoll should +1 to frameIndex', function() {
    game.logRoll();
    expect(game.frameIndex).toEqual(0);
  });



});
