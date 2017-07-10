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

  it("starts with a score of 0", function() {
    expect(game.score).toEqual(0);
  });

  describe("addFrame", function() {
    it("can add a frame to the frames array", function() {
      game.addFrame(frame);
      expect(game.frames).toEqual([frame]);
    });
  });

  describe("totalGameScore", function() {
    it("can give you a total score for the game", function() {
      frame.score = 6;
      frame2.score = 7;
      game.addFrame(frame);
      game.addFrame(frame2);
      game.totalGameScore();
      expect(game.score).toEqual(13);
    });
  });

  describe("spareBonus", function() {
    it("calculates bonus points resulting from spares", function() {
      frame.spare = true;
      frame2.turn = [4,3];
      game.addFrame(frame);
      game.addFrame(frame2);
      game.spareBonus();
      expect(game.score).toEqual(4);
    });
  });

  describe("strikeBonus", function() {
    it("calculates bonus points resulting from stikes", function() {
      frame.strike = true;
      frame2.score = 7;
      game.addFrame(frame);
      game.addFrame(frame2);
      game.strikeBonus();
      expect(game.score).toEqual(7);
    });
  });
});
