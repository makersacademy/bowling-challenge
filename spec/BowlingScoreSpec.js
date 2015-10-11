beforeEach(function() {
  game = new BowlingScore();
});

describe ("BowlingScore", function() {

  describe ("new roll", function () {

    it("pushes score into rolls", function() {
      game.roll(7);
      game.roll(2);
      game.roll(4);
      game.roll(5);
      expect(game.rolls).toEqual([7,2,4,5]);
    });

    it("pushes 10 into own array in rawScore", function() {
      game.roll(10);
      expect(game.rolls).toEqual([10,null]);
    });
  });

  describe ("makeFrameScores", function(){
    it("restructures rolls into frameScores", function() {
      game.rolls = [7,2,4,5]
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

    it("if strikes are hit in a row, push next two rolls into bonusScores", function () {
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

  describe ("Score", function () {

    it("score is the fum of frameTotals and frameBonus", function () {
      game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
      game.frameTotal();
      game.frameBonus();
      game.scores();
      expect(game.score).toEqual(111);
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

  // describe ("testing game whole", function () {
  //   it("test all features", function (){
  //     game.frameScores = [[7,2],[4,1],[10,null],[8,2],[3,6],[2,4],[6,4],[10,null],[10,null],[3,6]];
  //     game.frameBonus();
  //     expect(game.bonusScores).toEqual([0,0,8,2,3,0,0,10,10,3,3,6,0]);
  //     game.frameTotal();
  //     expect(game.frameTotals).toEqual([9,5,10,10,9,6,10,10,10,9]);
  //     game.scores();
  //     expect(game.score).toEqual(133);
  //   })
  // });

});
