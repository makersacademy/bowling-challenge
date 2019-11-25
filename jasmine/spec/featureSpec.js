describe("Features", function() {
  var game;
  var frame;
  var strikeFrame;
  var spareFrame;
  beforeEach(function() {
    game = new Game;
    frame = new Frame;
  });

  it("can display a single frame's score" function() {
    frame.roll(8)
    frame.roll(2)
    game.addFrame(frame)
    expect(game.printGame();).toEqual([frame]);
  });
});
