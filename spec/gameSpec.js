describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
    frame = new Frame();
  });

describe("#initialise", function () {
  it("has a default total of 0", function () {
    expect(game.total).toEqual(0);
  });
  it("should initialise with an empty array of frames", function () {
    expect(game.frames).toEqual([]);
  });
  it("should start with 10 frames", function () {
    expect(game.framesLeft).toEqual(10);
  });
});

  describe("#addFrame", function () {
    beforeEach(function () {
      game.addFrame(frame)
    });

    it("adds frame result to frames array", function () {
      expect(game.frames).toContain(frame);
    });

    it("takes away a frame from framesLeft when a frame is added", function () {
      expect(game.framesLeft).toEqual(9);
    });

    it("returns game over when 10 frames have been added", function () {
      for (var i = 0; i < 9; i++) {
        game.addFrame(frame);
      }
      expect(game.addFrame(frame)).toEqual("Game over");
    });
  });
});
