describe('Spare bonus applied', function() {
  it('should note a spare bonus against a frame if spare scored', function() {
    game = new Game
    game.roll(5);
    game.roll(5);
    expect(game.lastFrame().bonus()).toEqual('spare')
  })
  it('should apply spare bonus to frame following completion of next frame', function() {
    game = new Game
    game.roll(5);
    game.roll(5);
    //1st frame ends with a spare
    game.roll(3);
    game.roll(5);
    //second frame ends, bonus of 3 should now be added to previous frame's score
    expect(game.frames[0].score()).toEqual(13);
  })
});
