describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function bowlHelper(bowlTimes, pinsHitOnEachBowl) {
    for (var i = 0; i < bowlTimes; i++) {
      game.bowl(pinsHitOnEachBowl);
    }
  } 

  describe("The number of pins standing is tracked.", function() {
    it("10 pins are standing at beginning of the game", function() {
      expect(game.pinsStanding).toEqual(10);
    });
    it("after 5 pins are knocked down, 5 are left standing", function() {
      bowlHelper(1,5);
      expect(game.pinsStanding).toEqual(5);
    });
    it("after 2 standard bowls the pins are reset", function() {
      bowlHelper(2,1);
      expect(game.pinsStanding).toEqual(10);
    });
    it("after a strike the pins are reset", function() {
      bowlHelper(1,10);
      expect(game.pinsStanding).toEqual(10);
    });
  });

  describe("The number of balls bowled in the frame are tracked.", function() {
    it("A new game starts on ball #1", function() {
      expect(game.frameBall).toEqual(1);
    });
    it("First bowl hits 1 pin and sets the frame to ball #2", function() {
      bowlHelper(1,1)
      expect(game.frameBall).toEqual(2);
    });
    it("Two bowls hits 1 pin each and the next frame starts at ball #1", function() {
      bowlHelper(2,1)
      expect(game.frameBall).toEqual(1);
    });
    it("A strike starts the next frame starts at ball #1", function() {
      bowlHelper(1,10)
      expect(game.frameBall).toEqual(1);
    });
  });

  describe("#isStrike", function() {
    it("recognises a strike", function() {
      expect(isStrike(10)).toBe(true);
    });
  });

  describe("#isSpare", function() {
    it("recognises a spare", function() {
      expect(isSpare(5,5)).toBe(true);
    });
  });

  describe("#standardScore", function() {
    it("frame score is correctly calculated when no strike or spare", function() {
      game.standardScore(1,1);
      expect(game.calcScore).toEqual(2);
    });
    it("advances score checking properly through to the next frame", function() {
      game.standardScore(1,1);
      expect(game.logPinsHitIndex).toEqual(2);
    });
  });

  describe("#bonusScore", function() {
    it("frame score is correctly calculated if there is a strike", function() {
      game.bonusScore(10,1,1);
      expect(game.calcScore).toEqual(12);
    });
    it("frame score is correctly calculated if there is a spare", function() {
      game.bonusScore(5,5,1);
      expect(game.calcScore).toEqual(11);
    });
    it("advances score checking properly through to the next frame after a strike", function() {
      game.bonusScore(10,1,1);
      expect(game.logPinsHitIndex).toEqual(1);
    });
    it("advances score checking properly through to the next frame after a spare", function() {
      game.bonusScore(5,5,1);
      expect(game.logPinsHitIndex).toEqual(2);
    });
  });

  describe("No pins are hit - gutter game.", function() {
    it("The final score should be zero", function() {
      bowlHelper(20,0);
      expect(game.finalScore()).toEqual(0);
    });
  });

  describe("One pin hit on each bowl.", function() {
    it("The final score should be 20", function() {
      bowlHelper(20,1);
      expect(game.finalScore()).toEqual(20);
    });
  });

  describe("All strikes - perfect game.", function() {
    it("The final score should be 300", function() {
      bowlHelper(12, 10);
      expect(game.finalScore()).toEqual(300);
    });
  });

  describe("A spare.", function() {
    it("A spare on first frame, then all 1's. Final score should be 29", function() {
      bowlHelper(2, 5);
      bowlHelper(18,1);
      expect(game.finalScore()).toEqual(29);
    });
  });

  describe("A strike.", function() {
    it("A strike on first frame, then all 1's. Final score should be 30", function() {
      bowlHelper(1, 10);
      bowlHelper(18, 1);
      expect(game.finalScore()).toEqual(30);
    });
  });

  describe("Example score from challenge.", function() {
    it("Should result in 133 points", function() {
    game.bowl(1);
    game.bowl(4);
    game.bowl(4);
    game.bowl(5);
    game.bowl(6);
    game.bowl(4);
    game.bowl(5);
    game.bowl(5);
    game.bowl(10);
    game.bowl(0);
    game.bowl(1);
    game.bowl(7);
    game.bowl(3);
    game.bowl(6);
    game.bowl(4);
    game.bowl(10);
    game.bowl(2);
    game.bowl(8);
    game.bowl(6);
    expect(game.finalScore()).toEqual(133);
    });
  });
});