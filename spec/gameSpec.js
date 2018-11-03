describe("Game", function() {

  game = new Game()

  standardFrame = new Frame([4,5]);
  spareFrame = new Frame([5,5]);
  strikeFrame = new Frame([10]);
  gutterFrame = new Frame([]);

  it("can add a frame to the frames array", function() {
    game.addFrame(standardFrame)
    expect(game.frames.length).toEqual(1);
  });

});
