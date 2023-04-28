const Scorecard = require("./scorecard");

describe("scorecard class", () => {

  const simulateGameUntilLastShot = (scorecard) => {
    scorecard.addFrame(5, 5);
    scorecard.addFrame(3, 5);
    scorecard.addFrame(7, 0);
    scorecard.addFrame(2, 5);
    scorecard.addFrame(10);
    scorecard.addFrame(3, 5);
    scorecard.addFrame(7, 0);
    scorecard.addFrame(2, 5);
    scorecard.addFrame(7, 2);
    // By the end of round 9, player has 84 points scored.
    // All subsequent endgame tests are based on this one
  };

  let scorecard; 
  
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe("initialization and adding frames", () => {
    it("initializes with an empty frame", () => {
      expect(scorecard.frames).toEqual([]);
    });

    it("adds a frame into players frames with addFrame", () => {
      scorecard.addFrame(1, 2);
      expect(scorecard.frames).toEqual([[1, 2]]);
    });

    it("adds resets the frames", () => {
      scorecard.addFrame(1, 2);
      expect(scorecard.frames).toEqual([[1, 2]]);
      scorecard.resetGame();
      expect(scorecard.frames).toEqual([]);
    });

    it("stacks multiple frames in an array", () => {
      scorecard.addFrame(1, 2);
      scorecard.addFrame(2, 3);
      expect(scorecard.frames).toEqual([
        [1, 2],
        [2, 3],
      ]);
    });
  });

  describe("bonus frame after 10th shot", () => {
    it("creates a bonus frame of a length of 1 and pushes to array", () => {
      scorecard.addFrame(1);
      expect(scorecard.frames).toEqual([[1]]);
    });
    it("creates a bonus frame of a length of 3 and pushes to array", () => {
      scorecard.addFrame(1, 2, 3);
      expect(scorecard.frames).toEqual([[1, 2, 3]]);
    });
    it("returns the score of the bonus frame separately", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(6);
      expect(scorecard.addBonusScore()).toEqual(6);
    });
    it("returns undefined if game has not gone beyond 10 shots", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(7, 3);
      expect(scorecard.addBonusScore()).toEqual(undefined);
    });
  });

  describe("checkSpecials method", () => {
    it("returns strike if given frame is [10]", () => {
      expect(scorecard.checkSpecials([10])).toEqual("strike");
    });

    it("returns a spare if given frame is [5,5]", () => {
      expect(scorecard.checkSpecials([5, 5])).toEqual("spare");
    });

    it("returns a spare if given frame is [0,10]", () => {
      expect(scorecard.checkSpecials([0, 10])).toEqual("spare");
    });
  });

  describe("addFrameScore method", () => {
    it("counts the score of the given frame normally if no strike or spare", () => {
      scorecard.addFrame(1, 2);
      scorecard.addFrame(4, 5);
      expect(scorecard.addFrameScore(1)).toEqual(9);
    });

    it("includes the bonus points awarded by a spare", () => {
      scorecard.addFrame(4, 6);
      scorecard.addFrame(4, 5);
      expect(scorecard.addFrameScore(1)).toEqual(13);
    });

    it("includes the bonus points awarded by a strike", () => {
      scorecard.addFrame(10);
      scorecard.addFrame(4, 5);
      expect(scorecard.addFrameScore(1)).toEqual(18);
    });
  });

  describe("calculateScore method", () => {
    it("shows the current score as 0 upon initialisation", () => {
      expect(scorecard.calculateScore()).toEqual(0);
    });

    it("update players current score for first frame", () => {
      scorecard.addFrame(2, 3);
      expect(scorecard.calculateScore()).toEqual(5);
    });

    it("update players current score for each frame", () => {
      scorecard.addFrame(2, 3);
      expect(scorecard.calculateScore()).toEqual(5);
      scorecard.addFrame(4, 6);
      expect(scorecard.calculateScore()).toEqual(15);
      scorecard.addFrame(1, 3);
      expect(scorecard.calculateScore()).toEqual(20);
    });

    it("returns the total score including spare points", () => {
      scorecard.addFrame(5, 5);
      scorecard.addFrame(3, 5);
      scorecard.addFrame(7, 0);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(35);
    });

    it("returns the total score including consecutive spare points", () => {
      scorecard.addFrame(3, 1);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(40);
    });

    it("returns the total score including zigzagged spare points", () => {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(2, 5);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(38);
    });

    it("returns the total score including strike points", () => {
      scorecard.addFrame(10);
      scorecard.addFrame(3, 5);
      scorecard.addFrame(7, 0);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(40);
    });

    it("returns the total score including consecutive strike points", () => {
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(7, 0);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(51);
    });

    it("returns the total score including zigzagged strike points", () => {
      scorecard.addFrame(10);
      scorecard.addFrame(5, 4);
      scorecard.addFrame(10);
      scorecard.addFrame(2, 5);
      expect(scorecard.calculateScore()).toEqual(52);
    });
  });

  describe("checkForPerfectOrGutter method", () => {
    test("it returns regular game if player has anything besides 0 or 10", () => {
      simulateGameUntilLastShot(scorecard);
      expect(scorecard.checkForPerfectOrGutter()).toEqual("Regular game");
    });

    test("it returns perfect game if player has scored strikes in all rounds", () => {
      for (let i = 0; i < 13; i++) {
        scorecard.addFrame(10);
      }
      expect(scorecard.checkForPerfectOrGutter()).toEqual("Perfect game");
    });

    test("it returns gutter game if player has scored 0 in all rounds", () => {
      for (let i = 0; i < 10; i++) {
        scorecard.addFrame(0, 0);
      }
      expect(scorecard.checkForPerfectOrGutter()).toEqual("Gutter game");
    });
  });

  describe("when evaluating the 10th frame", () => {
    test("counts the game regularly if the player fails to score any spare or strikes", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(4, 3);
      expect(scorecard.calculateScore()).toEqual(91);
    });

    test("if player ends with spare / fails to score strike", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(6);
      expect(scorecard.calculateScore()).toEqual(100);
    });

    test("if player ends with spare / scores a strike and two randoms", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(10, 4, 5);
      expect(scorecard.calculateScore()).toEqual(113);
    });

    test("if player ends with a strike / scores three consecutive strikes", () => {
      simulateGameUntilLastShot(scorecard);
      scorecard.addFrame(10);
      scorecard.addFrame(10, 10, 10);
      expect(scorecard.calculateScore()).toEqual(124);
    });
  });

  describe("cross checking with readme gameplay for score validation", () => {
    test("returns 133", () => {
      scorecard.addFrame(1, 4);
      scorecard.addFrame(4, 5);
      scorecard.addFrame(6, 4);
      scorecard.addFrame(5, 5);
      scorecard.addFrame(10);
      scorecard.addFrame(0, 1);
      scorecard.addFrame(7, 3);
      scorecard.addFrame(6, 4);
      scorecard.addFrame(10);
      scorecard.addFrame(2, 8);
      scorecard.addFrame(6);
      expect(scorecard.calculateScore()).toEqual(133);
    });
  });

  describe("helper methods", () => {
    it("returns the sum of an array", () => {
      expect(scorecard.sum([4, 5])).toEqual(9);
    });
  });
});
