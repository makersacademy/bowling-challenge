var game = new BowlingScore();

describe("BowlingScore",function() {

  describe("addNewRoundScore",function() {
    it("correctly push scores into rawScore array with 2 rounds",function() {
      game.addRoundToRawScores(1);
      game.addRoundToRawScores(9);
      expect(game.rawScores).toEqual([1,9]);
    });

    it("correctly push scores into rawScore array with 6 rounds",function() {
      game.addRoundToRawScores(8);
      game.addRoundToRawScores(2);
      game.addRoundToRawScores(3);
      game.addRoundToRawScores(1);
      expect(game.rawScores).toEqual([1,9,8,2,3,1]);
    });
  });

  describe("createFrameScores",function() {
    it("creates FrameScores array of frame arrays",function() {
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1]]);
    });

    it("add a frame with first round of 0 and second of 10",function() {
      game.addRoundToRawScores(0);
      game.addRoundToRawScores(10);
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1],[0,10]]);
    });

    it("add a frame with first round of 10 and no second round",function() {
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(2);
      game.addRoundToRawScores(3);
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1],[0,10],[10],[2,3]]);
    });
  });

  describe("createFrameBonus",function() {
    it("computes frame bonuses as an array of bonuses",function() {
      game.createFrameBonus();
      expect(game.frameBonus).toEqual([8,3,0,10,5,0]);
    });

    it("computes frame bonuses for upto 9th frame",function() {
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(10);
      game.createFrameScores();
      game.createFrameBonus();
      expect(game.frameBonus).toEqual([8,3,0,10,5,0,20,10,0]);
    });

    it("computes frame bonuses also for 10th frame",function() {
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(10);
      game.createFrameScores();
      game.createFrameBonus();
      expect(game.frameBonus).toEqual([8,3,0,10,5,0,20,20,20,20,10,0]);
    });
  });

  describe("createFrameTotals",function() {
    it("computes totals for each frame",function() {
      game.createFrameTotals();
      expect(game.frameTotals).toEqual([ 18, 13, 4, 20, 15, 5, 30, 30, 30, 30, 20, 10 ]);
    });
  });

  describe("createGameTotal",function() {
    it("computes total for the game so far",function() {
      game.createGameTotal();
      expect(game.gameTotal).toEqual(195);
    });
  });

  // describe("newRound", function() {
  //   var newGame = new BowlingScore();
  //   newGame.newRound(9);
  //   newGame.newRound(1);
  //   newGame.newRound(2);
  //   newGame.newRound(3);
  //   newGame.newRound(10);
  //   newGame.newRound(0);
  //   newGame.newRound(10);
  //   newGame.newRound(10);
  //   newGame.newRound(3);
  //   it("computes frame scores", function() {
  //
  //   });
  //
  //   it("computes frame bonuses", function() {
  //
  //   });
  //
  //   it("computes frame totals", function() {
  //
  //   });
  //
  //   it("computes game total", function() {
  //
  //   });
  // });

});
