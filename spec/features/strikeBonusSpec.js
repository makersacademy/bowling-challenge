describe('Strike bonus applied', function() {
  it('should note a strike bonus against a frame if strike scored', function() {
    game = new Game
    game.roll(10);
    expect(game.lastFrame().bonus()).toEqual('strike')
  })
  it('should apply strike bonus following completion of next frame (not another strike)', function() {
    game = new Game
    game.roll(10);
    //1st frame ends with a strike
    game.roll(3);
    game.roll(5);
    //second frame ends, bonus of 8 should now be added to previous frame's score
    expect(game.frames[0].score()).toEqual(18);
  })
  it('should handle consecutive strikes scenario)', function() {
    game = new Game
    game.roll(10);
    //1st frame ends with a strike
    game.roll(10);
    //second frame ends with a strike
    game.roll(5);
    game.roll(0);
    //third frame ends, bonus of 15 should be added to first frame score
    expect(game.frames[0].score()).toEqual(25);
  })
});
