
var game = new BowlingScore();
describe ("BowlingScore", function() {

  describe ("addNewRoundScore", function () {

    // it("pushes score into rawScores", function() {
    //   game.addNewRoundScore(6);
    //   game.addNewRoundScore(3);
    //   expect(game.rawScores).toEqual([6,3]);
    // });

    it("pushes score into rawScores", function() {
      game.addNewRoundScore(7);
      game.addNewRoundScore(2);
      game.addNewRoundScore(4);
      game.addNewRoundScore(5);
      expect(game.rawScores).toEqual([7,2,4,5]);
    });

    it("pushes 10 into own array in rawScore", function() {
      game.addNewRoundScore(10);
      expect(game.rawScores).toEqual([7,2,4,5,10,0]);
    });
  });

  describe ("makeFrameScores", function(){
    it("restructures rawScores into frameScores", function() {
      game.makeFrameScores();
      expect(game.frameScores).toEqual([[7,2],[4,5],[10,0]]);
    });
  });

});

describe ("BonusScore", function() {

  describe ("spareBonus", function() {
    it("adds next rawScore to bonusScore", function() {
      game.addNewRoundScore(3);
      game.addNewRoundScore(7);
      game.addNewRoundScore(6);
      expect(game.bonusScores).toEqual(6);
    });

  });
});
