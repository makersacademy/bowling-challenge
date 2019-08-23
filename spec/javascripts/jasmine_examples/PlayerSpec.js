describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("a game", function() {
    it("can have a initial score of 0", function() {
      expect(game.current_score).toEqual(0);
    });

    it("can have a score for a frame", function() {
      expect(game.frame_score).toEqual(0);
    });

  });

  describe("frames", function() {
    it("starts on the first frame", function() {
      expect(game.current_frame).toEqual(1);
    });

    it("can further the frame number", function() {
      game.saveScore();
      expect(game.current_frame).toEqual(2);
    })
  });

  describe("scoring", function() {
    it("can save a score for the first bowl", function() {
      game.firstBowl(7);
      expect(game.frame_score).toEqual(7);
    });

    it("can save a score for the second bowl", function() {
      game.secondBowl(2);
      expect(game.frame_score).toEqual(2);
    });

    it("can have a total score for the frame", function() {
      game.firstBowl(7);
      game.secondBowl(2);
      expect(game.frame_score).toEqual(9);
    });

    it("can store a frame score in the scorecard", function() {
      game.firstBowl(7);
      game.secondBowl(2);
      game.saveScore();
      expect(game.score_card["frame_1"]).toEqual(9);
    });

    it("can store a second frame score after the first frame", function() {
      game.saveScore();
      game.firstBowl(1);
      game.secondBowl(0);
      game.saveScore();
      expect(game.score_card["frame_2"]).toEqual(1);
    });
  });

});
