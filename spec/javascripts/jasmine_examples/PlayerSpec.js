describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("a game", function() {
    it("can have a initial score of 0", function() {
      expect(game.total_score).toEqual(0);
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
      expect(game.score_card["frame_1"]).toEqual(2);
    });

    it("can have a total score for the frame", function() {
      game.firstBowl(7);
      game.secondBowl(2);
      expect(game.total_score).toEqual(9);
    });

    it("can store a frame score in the scorecard", function() {
      game.firstBowl(7);
      game.secondBowl(2);
      expect(game.score_card["frame_1"]).toEqual(9);
    });

    it("can store a second frame score after the first frame", function() {
      game.saveScore();
      game.firstBowl(1);
      game.secondBowl(0);
      expect(game.score_card["frame_2"]).toEqual(1);
    });

    it("can store a total score for the whole game", function() {
      game.firstBowl(7);
      game.secondBowl(2);
      game.firstBowl(3);
      game.secondBowl(4);
      expect(game.total_score).toEqual(16);
    });

    it("can have a first frame score of 20 when there is a strike in each of the first two frames", function() {
      game.firstBowl(10);
      game.firstBowl(10);
      expect(game.score_card["frame_1"]).toEqual(20);
    });

    it("can have a first frame score of 30 when there is a triple in the first three frames", function() {
      game.firstBowl(10);
      game.firstBowl(10);
      game.firstBowl(10);
      expect(game.score_card["frame_1"]).toEqual(30);
    });

    it("can have a score of 24 when a strike in the first frame and 7 in the second frame", function() {
      game.firstBowl(8);
      game.secondBowl(2);
      game.firstBowl(7);
      game.secondBowl(0);
      expect(game.total_score).toEqual(24);
    });

    it("can have a score of 38 when spare, 8/10 spare then 5/0", function() {
      game.firstBowl(8);
      game.secondBowl(2);
      game.firstBowl(8);
      game.secondBowl(2);
      game.firstBowl(5);
      game.secondBowl(0);
      expect(game.total_score).toEqual(38);
    });

    it("can have a score of 60 when strike, spare, strike, 5/0", function() {
      game.firstBowl(10);
      game.firstBowl(8);
      game.secondBowl(2);
      game.firstBowl(10);
      game.firstBowl(5);
      game.secondBowl(0);
      expect(game.total_score).toEqual(60);
    });

    it("can have a score of 43 when; spare, 7/2, 9/-, 7/1", function() {
      game.firstBowl(7);
      game.secondBowl(3);
      game.firstBowl(7);
      game.secondBowl(2);
      game.firstBowl(9);
      game.secondBowl(0);
      game.firstBowl(7);
      game.secondBowl(1);
      expect(game.total_score).toEqual(43);
    });
  });

});
