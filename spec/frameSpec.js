describe("Frame", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Can create a frame class", function() {
    let gutterFrame = new Frame(0, 0)
    expect(gutterFrame instanceof Frame).toBe(true);
  });

  it("Can add up two rolls in a frame", function() {
    let frame = new Frame(1, 3)
    expect(frame.addScore()).toEqual(4)
  })
})