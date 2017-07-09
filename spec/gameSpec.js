describe("Game", function() {

  var game;
  var frame;
  var frame2;

  beforeEach (function() {
    game = new Game();
    frame = new Frame();
    frame2 = new Frame();
  });

  it("starts with an empty array of frames", function() {
    expect(game.frames).toEqual([]);
  });

  describe("addFrame", function() {
    it("can add a frame to the frames array", function() {
      game.addFrame(frame);
      expect(game.frames).toEqual([frame]);
    });
  });

  describe("totalGameScore", function() {
    it("can give you a total score for the game", function() {
      frame.score = 6
      frame2.score = 7
      game.addFrame(frame);
      game.addFrame(frame2);
      expect(game.totalGameScore()).toEqual(13);
    });


  });
});
