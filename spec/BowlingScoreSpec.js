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

    // it("knows if frame is a spare", function () {
    //   game.frameScores = [[7,3],[4,1]];
    //   expect(game.isSpare()).toBe(true);
    // });

    it("if previous frame scores total is 10, push next rawScore into BonusScores", function (){
      game.frameScores = [[7,3],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([4]);
    });

    it("if previous frame total is not 10, do not push next rawScore into bonusScores", function() {
      game.frameScores = [[7,2],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([]);
    });

    it("if second score in frame is 10, push only the next rawScore into BonusScores", function() {
      game.frameScores = [[0,10],[3,5]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3])
    });

  });

  describe ("Strike", function () {

    // it("knows if frame is a strike", function () {
    //   game.frameScores = [[10,null],[4,1]];
    //   expect(game.isStrike()).toBe(true);
    // });

    it("if first score of frame is 10, push next two rawScore's into bonusScores", function (){
      game.frameScores = [[10,null],[3,5],[10,null],[7,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3,5,7,1]);
    });

    it("if strikes are hit in a row, push next two rawScores into bonusScores", function () {
      game.frameScores = [[10,null], [10,null], [7,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([10,7,7,1]);
    });

    it("if strikes are hit multiple times in a row, keep pushing 10's into bonusScores", function () {
      game.frameScores = [[10,null],[10,null],[10,null],[10,null],[2,3]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([10,10,10,10,10,2,2,3]);
    });

  });

  describe ("example frames", function () {

    it("test if strike and spare work", function () {
      // game.frameScores = [[6,2],[9,1],[7,1],[10,null],[10,null],[7,3],[6,1],[10,null],[8,1],[5,1]];
      game.frameScores = [[10,null],[10,null],[8,1],[10,null],[5,1],[6,4],[6,2],[5,5],[7,3],[5,2]];
      // game.frameScores = [[8,1],[7,3],[10,null],[10,null],[3,2],[10,null],[10,null],[10,null],[6,4],[2,3]];
      game.frameBonus();
      // expect(game.bonusScores).toEqual([7,10,7,7,3,6,8,1]);
      expect(game.bonusScores).toEqual([10,8,8,1,5,1,6,7,5]);
      // expect(game.bonusScores).toEqual([10,10,3,3,2,10,10,10,6,6,4,2]);
    });
  });

  describe ("frameTotals", function () {

    it("logs individual frame total", function () {
      game.frameScores = [[6,2],[8,1],[5,4]];
      game.frameTotal();
      expect(game.frameTotals).toEqual([8,9,9]);
    });

  });

  describe ("testing game whole", function () {
    it("test all features", function (){
      game.frameScores = [[7,2],[4,1],[10,null],[8,2],[3,6],[2,4],[6,4],[10,null],[10,null],[3,6]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([8,2,3,10,10,3,3,6]);
      game.frameTotal();
      expect(game.frameTotals).toEqual([9,5,10,10,9,6,10,10,10,9]);
    })
  });

});
