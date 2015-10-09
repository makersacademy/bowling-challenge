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

  describe ("isSpare", function() {

    it("knows if frame is a spare", function () {
      game.frameScores = [[7,3],[4,1]];
      expect(game.isASpare()).toBe(true);
    });

    it("if previous frame scores total is 10, push next rawScore into BonusScores", function (){
      game.frameScores = [[7,3],[4,1]];
      game.isSpare();
      expect(game.bonusScores).toEqual([4]);
    });

    it("if previous frame total is not 10, do not push next rawScore into bonusScores", function() {
      game.frameScores = [[7,2],[4,1]];
      game.isSpare();
      expect(game.bonusScores).toEqual([]);
    });

    it("if second rawScore is 10, push only the next rawScore into BonusScores", function() {
      game.frameScores = [[0,10],[3,5]];
      game.isSpare();
      expect(game.bonusScores).toEqual([3])
    });

  });

  describe ("isStrike", function () {

    it("knows if frame is a strike", function () {
      game.frameScores = [[10,null],[4,1]];
      expect(game.isAStrike()).toBe(true);
    });

    it("if first score of frame is 10, push next two rawScore's into bonusScores", function (){
      game.frameScores = [[10,null],[3,5],[10,null],[7,1]];
      game.isStrike();
      expect(game.bonusScores).toEqual([3,5,7,1]);
    });

  });

});
