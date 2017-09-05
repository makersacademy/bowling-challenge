describe("Game", function() {

  beforeEach (function() {
    game = new Game();
    frame = new Frame();
    frame2 = new Frame();
    frame3 = new Frame();
    frame4 = new Frame();
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

    it("cannot add more than 10 basic frames", function() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(i) {
      game.addFrame(frame);
      });
      expect(function() { game.addFrame(frame); } ).toThrow("Game over!");
    });

    it("can add 11th frame if 10th is strike or spare", function() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(i) {
      game.addFrame(frame);
      });
      frame2.score = 10;
      game.addFrame(frame2);
      game.addFrame(frame3);
      expect(game.frames.slice(-1)[0]).toEqual(frame3);
      expect(game.frames.length).toEqual(11);
    });

    it("cannot add more than 11 frames", function() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(i) {
      game.addFrame(frame);
      });
      frame2.score = 10;
      game.addFrame(frame2);
      game.addFrame(frame3);
      expect(function() { game.addFrame(frame4); } ).toThrow("Game over!");
    });
  });

  describe("totalScore", function() {
    it("can give you a total score excluding bonus points", function() {
      frame.score = 6;
      frame2.score = 7;
      game.addFrame(frame);
      game.addFrame(frame2);
      game.totalScore();
      expect(game.score).toEqual(13);
    });

    it("can give you a total including bonus points", function() {
      frame.score = 2;
      frame2.score = 10;
      frame2.strike = true;
      frame3.score = 10;
      frame3.spare = true;
      frame4.bowls = [2,2];
      frame4.score = 4;
      game.addFrame(frame);
      game.addFrame(frame2);
      game.addFrame(frame3);
      game.addFrame(frame4);
      game.totalScore();
      expect(game.score).toEqual(38);
    });
  });

  describe("_spareBonus", function() {
    it("calculates bonus points resulting from spares", function() {
      frame.spare = true;
      frame2.bowls = [4,3];
      game.addFrame(frame);
      game.addFrame(frame2);
      game._spareBonus();
      expect(game.score).toEqual(4);
    });
  });

  describe("_strikeBonus", function() {
    it("calculates bonus points resulting from strikes", function() {
      frame.strike = true;
      frame2.score = 7;
      game.addFrame(frame);
      game.addFrame(frame2);
      game._strikeBonus();
      expect(game.score).toEqual(7);
    });
  });
});
