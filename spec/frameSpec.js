describe("Frame", function() {
  var game;
  var gutterFrame;

  beforeEach(function() {
    game = new Game();
    gutterFrame = new Frame(0, 0);
  });

  it("Can create a frame class", function() {
    expect(gutterFrame instanceof Frame).toBe(true);
  });
})