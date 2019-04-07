describe('Strike bonus applied', function() {
  it('should note a strike bonus against a frame if strike scored', function() {
    game = new Game
    game.roll(10);
    expect(game.lastFrame().bonus()).toEqual('strike')
  })
  // it('should apply strike bonus to frame following completion of next frame', function() {
  //   game = new Game
  //   game.roll(10);
  //   //1st frame ends with a spare
  //   game.roll(3);
  //   game.roll(5);
  //   //second frame ends, bonus of 3 should now be added to previous frame's score
  //   expect(game.frames[0].score()).toEqual(18);
  // })
});
