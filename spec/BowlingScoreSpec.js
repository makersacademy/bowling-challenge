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

    it("if roll == 10, push null into rawScore", function() {
      game.roll(10);
      expect(game.rolls).toEqual([10,null]);
    });
  });

  describe ("makeFrame", function(){
    it("restructures rolls into frameScores", function() {
      game.rolls = [7,2,4,5]
      game.makeFrame();
      expect(game.frameScores).toEqual([[7,2],[4,5]]);
    });
  });

  describe ("Spare", function() {

    it("knows if frame is a spare", function () {
      game.frameScores = [[7,3],[4,1]];
      expect(game.isSpare()).toBe(true);
    });

    it("if frameTotal < 10, do not push anything into bonusScores", function() {
      game.frameScores = [[7,2],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([0,0]);
    });

    it("if frameTotal === 10, push next rawScore into BonusScores", function (){
      game.frameScores = [[7,3],[4,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([4,0]);
    });

    it("if second score in frame is 10, push only the next rawScore into BonusScores", function() {
      game.frameScores = [[0,10],[3,5]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3,0])
    });

  });

  describe ("Strike", function () {

    it("knows if frame is a strike", function () {
       game.frameScores = [[10,null],[4,1]];
       expect(game.isStrike()).toBe(true);
     });

    it("if first score of frame is 10, push next two rawScore's into bonusScores", function (){
      game.frameScores = [[10,null],[3,5],[10,null],[7,1]];
      game.frameBonus();
      expect(game.bonusScores).toEqual([3,5,0,7,1,0]);
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
      game.frameTotalScore();
      expect(game.frameTotalScores).toEqual(90);
    });

    it("score is the fum of frameTotals and frameBonus", function () {
      game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
      game.frameBonus();
      game.bonusTotalScore();
      expect(game.bonusTotalScores).toEqual(21);
    });


    it("score is the fum of frameTotals and frameBonus", function () {
      game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
      game.scores();
      expect(game.score).toEqual(111);
    });

    it("test game", function () {

    });

  });

});
