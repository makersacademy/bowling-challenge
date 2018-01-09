describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {

    frame = new Frame()
    game = new Game(frame);
  });

  it("starts a new game with the first frame in the frames array", function() {
    expect(game.frames[0]).toEqual(frame);
  });

  it("starts with a frame index of 1", function() {
    expect(game.frameIndex).toEqual(1);
  });

  describe("#bowl", function() {

    it("bowls in the current frame only if the frame is open", function() {
      game.bowl(5);
      expect(game.frameIndex).toEqual(1);
    });

    it("moves to the next frame if the current frame is a strike", function() {
      game.bowl(10);
      expect(game.frameIndex).toEqual(2);
    });

    it("move to the next frame if the current frame is complete", function() {
      console.log(game.currentFrame.bowls)
      game.bowl(5);
      game.bowl(5);
      expect(game.frameIndex).toEqual(2);
    });

    it("ends the game after 10 frames", function() {
      for(var i = 0; i < 20; i++) { game.bowl(1) };
      game.bowl(1);
      expect(game.frameIndex).toEqual(10);
    });
  });

  describe("#score", function() {

    it("calculates the basic score with no bonuses", function() {
      for(var i = 0; i < 20; i++) { game.bowl(1) };
      expect(game.score()).toEqual(20);
    });

    it("calculates a spare bonus", function() {
      for(var i = 0; i < 16; i++) { game.bowl(1) };
      game.bowl(4);
      game.bowl(6);
      game.bowl(1);
      game.bowl(1);
      expect(game.score()).toEqual(29);
    });

    it("calculates a strike bonus", function() {
      for(var i = 0; i < 16; i++) { game.bowl(1) };
      game.bowl(10);
      game.bowl(1);
      game.bowl(1);
      expect(game.score()).toEqual(30);
    })

    it("calculates a gutter game", function() {
      for(var i = 0; i < 20; i++) { game.bowl(0) };
      expect(game.score()).toEqual(0);
    });

    it("calculates a perfect game", function() {
      for(var i = 0; i < 12; i++) { game.bowl(10) };
      expect(game.score()).toEqual(300);
    });

    it("calculates the running total without frame totals where spare bonuses are unknown", function() {
      game.bowl(5);
      game.bowl(5);
      expect(game.score()).toEqual(0);
    });

    it("calculates the running total without frame totals where strike bonuses are unknown", function() {
      game.bowl(10);
      game.bowl(10);
      expect(game.score()).toEqual(0);
    });
  });
});
