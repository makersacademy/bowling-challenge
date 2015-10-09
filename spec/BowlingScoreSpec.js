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

    it("if previous frame scores total is 10, push last rawScore into BonusScores", function (){
      game.frameScores = [[7,3],[4,1]];
      game.isSpare();
      expect(game.bonusScores).toEqual([4]);
    });

    it("if previous frame total is not 10, do not push rawScore into bonusScores", function() {
      game.frameScores = [[7,2],[4,1]];
      game.isSpare();
      expect(game.bonusScores).toEqual([]);
    });

    it("if second rawScore is 10, pust only the last rawScore into BonusScores", function() {
      game.frameScores = [[0,10],[3,5]];
      game.isSpare();
      expect(game.bonusScores).toEqual([3])
    });

  });

  // describe ("isStrike", function (){
  //
    // it("if first score of frame is 10, push next two rawScore's into bonusScores", function (){
    //   game.rawScores = [2,3,10,null,7,6,3,4]
    //   game.makeFrameScores();
    //   game.isStrike();
    //   expect(game.bonusScores).toEqual([7,6])
    // });

    // it("if first score of frame is not 10, do not push rawScore into bonusScores", function() {
    //   game.rawScores = [2,3,10,null,7,6,3,4]
    //   game.makeFrameScores();
    //   game.isStrike();
    //   expect(game.bonusScores).toEqual([])
    // });
    //
  // });

});
