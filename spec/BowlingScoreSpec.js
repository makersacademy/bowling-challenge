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
      expect(game.frameTotals).toEqual([18,13,4,20,15,5,30,30,30,30,20,10]);
    });

  });

  describe("createGameTotal",function() {

    it("computes total for the game so far",function() {
      game.createGameTotal();
      expect(game.gameTotal).toEqual(195);
    });

  });

  describe("newRound", function() {

    var game1 = new BowlingScore();

    for(var i = 1; i < 13; i+=1) {game1.newRound(10);};

    it("collects frame scores for a perfect game", function() {
      expect(game1.frameScores).toEqual([[10],[10],[10],[10],[10],[10],[10],
        [10],[10],[10],[10],[10]]);
    });

    it("computes frame bonuses for a perfect game", function() {
      expect(game1.frameBonus).toEqual([20,20,20,20,20,20,20,20,20,20,10,0]);
    });

    it("computes frame totals for a perfect game", function() {
      expect(game1.frameTotals).toEqual([30,30,30,30,30,30,30,30,30,30,20,10]);
    });

    it("computes game total for a perfect game", function() {
      expect(game1.gameTotal).toEqual(300);
    });

    var game2 = new BowlingScore();

    for(var i = 1; i < 21; i+=1) {game2.newRound(0);};

    it("collects frame scores for a gutter game", function() {
      expect(game2.frameScores).toEqual([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0]]);
    });

    it("computes frame bonuses for a gutter game", function() {
      expect(game2.frameBonus).toEqual([0,0,0,0,0,0,0,0,0,0]);
    });

    it("computes frame totals for a gutter game", function() {
      expect(game2.frameTotals).toEqual([0,0,0,0,0,0,0,0,0,0]);
    });

    it("computes total for a gutter game", function() {
      expect(game2.gameTotal).toEqual(0);
    });

    var game3 = new BowlingScore();

    game3.newRound(5);
    game3.newRound(4);
    game3.newRound(6);
    game3.newRound(4);
    game3.newRound(7);
    game3.newRound(1);
    game3.newRound(10);
    game3.newRound(0);
    game3.newRound(10);
    game3.newRound(10);
    game3.newRound(10);
    game3.newRound(5);
    game3.newRound(4);
    game3.newRound(10);
    game3.newRound(4);
    game3.newRound(2);

    it("collects frame scores for a normal game", function() {
      expect(game3.frameScores).toEqual([[5,4],[6,4],[7,1],[10],[0,10],[10],
        [10],[5,4],[10],[4,2]]);
    });

    it("computes frame bonuses for a normal game", function() {
      expect(game3.frameBonus).toEqual([0,7,0,10,10,15,9,0,6,0]);
    });

    it("computes frame totals for a normal game", function() {
      expect(game3.frameTotals).toEqual([9,17,8,20,20,25,19,9,16,6])});

    it("computes total for a normal game", function() {
      expect(game3.gameTotal).toEqual(149);
    });

  });

});
