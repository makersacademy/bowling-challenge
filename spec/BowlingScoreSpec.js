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

  describe ("makeBonusScores", function() {
    it("if previous frame scores total is 10, push last rawScore into BonusScores", function (){
      game.rawScores = [7,3,4]
      game.makeFrameScores();
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([4]);
    });
  });

});
