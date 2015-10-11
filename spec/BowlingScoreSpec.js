beforeEach(function() {
  game = new BowlingScore();
});

describe ("BowlingScore", function() {

  describe ("addNewRoundScore", function () {

    it("pushes score into rawScores", function() {
      game.addNewRoundScore(7);
      game.addNewRoundScore(2);
      game.addNewRoundScore(4);
      game.addNewRoundScore(5);
      expect(game.rawScores).toEqual([7,2,4,5]);
    });

    it("pushes 10 into own array in rawScore", function() {
      game.addNewRoundScore(10);
      expect(game.rawScores).toEqual([10,null]);
    });
  });

  describe ("makeFrameScores", function(){
    it("restructures rawScores into frameScores", function() {
      game.rawScores = [7,2,4,5]
      game.makeFrameScores();
      expect(game.frameScores).toEqual([[7,2],[4,5]]);
    });
  });

  describe ("Spare", function() {

    it("if previous frame scores total is 10, push next rawScore into BonusScores", function (){
      game.frameScores = [[7,3],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([4,0]);
    });

    it("if previous frame total is not 10, do not push next rawScore into bonusScores", function() {
      game.frameScores = [[7,2],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([0,0]);
    });

    it("if second score in frame is 10, push only the next rawScore into BonusScores", function() {
      game.frameScores = [[0,10],[3,5]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3,0])
    });

  });

  describe ("Strike", function () {

    it("if first score of frame is 10, push next two rawScore's into bonusScores", function (){
      game.frameScores = [[10,null],[3,5],[10,null],[7,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3,5,0,7,1,0]);
    });

    it("if strikes are hit in a row, push next two rawScores into bonusScores", function () {
      game.frameScores = [[10,null], [10,null], [7,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([10,7,7,1,0]);
    });

    it("if strikes are hit multiple times in a row, keep pushing 10's into bonusScores", function () {
      game.frameScores = [[10,null],[10,null],[10,null],[10,null],[2,3]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([10,10,10,10,10,2,2,3,0]);
    });

  });


  describe ("frameTotals", function () {

    it("logs individual frame total", function () {
      game.frameScores = [[6,2],[8,1],[5,4]];
      game.frameTotal();
      expect(game.frameTotals).toEqual([8,9,9]);
    });

  });

  describe ("runningTotals", function () {

    it("updates runningTotals when frameTotals === 10", function () {
      game.frameScores = [[1,2],[6,4],[5,4]];
      game.frameTotal();
      game.frameBonus();
      game.runningTotal();
      expect(game.runningTotals).toEqual([3,18,27]);
    });

    // it("updates runningTotals when frameTotals[i][0] === 10", function () {
    //   game.frameScores = [[10,null],[7,1]];
    //   game.frameTotal();
    //   // game.frameTotals = [10,8,10,9];
    //   game.frameBonus();
    //   // game.bonusScores = [7,1,0,8,1,0];
    //   game.runningTotal();
    //   expect(game.runningTotals).toEqual([10,18]);
    // })

  });


  describe ("testing game whole", function () {
    it("test all features", function (){
      game.frameScores = [[7,2],[4,1],[10,null],[8,2],[3,6],[2,4],[6,4],[10,null],[10,null],[3,6]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([0,0,8,2,3,0,0,10,10,3,3,6,0]);
      game.frameTotal();
      expect(game.frameTotals).toEqual([9,5,10,10,9,6,10,10,10,9]);
    })
  });

});
