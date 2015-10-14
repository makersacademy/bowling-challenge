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
      game.frameScores = [[3,7]];
      expect(game.isSpare(game.frameScores[0])).toBe(true);
    });

    it("knows if frame is not a spare", function () {
      game.frameScores = [[6,3]];
      expect(game.isSpare(game.frameScores[0])).toBe(false);
      expect(game.isNothing(game.frameScores[0])).toBe(true);
    });

    it("adds current bonus", function () {
      game.frameScores = [[7,3],[4,6],[3,3]];
      game.whenSpare();
      expect(game.bonusTotalScores).toEqual(7);
    });

    it("adds current total", function () {
      // game.frameScores = [[7,3],[3,3]];
      game.rolls = [7,2,4,5]
      game.frameTotal();
      expect(game.total).toEqual(18);
    });

  });

  describe ("Strike", function () {

    it("knows if frame is a strike", function () {
       game.frameScores = [[10,null]];
       expect(game.isStrike(game.frameScores[0])).toBe(true);
     });

     it("knows if frame is not a strike", function () {
       game.frameScores = [[4,1]];
       expect(game.isStrike(game.frameScores[0])).toBe(false);
       expect(game.isNothing(game.frameScores[0])).toBe(true);
     });

     it("adds current bonus", function () {
       game.frameScores = [[10,null],[10,null],[3,3]];
       game.whenStrike();
       expect(game.bonusTotalScores).toEqual(19);
     });

     it("adds current total", function () {
       game.frameScores = [[10,null],[10,null],[3,3]];
       game.rolls = [10,null,10,null,3,3];
       game.frameTotal();
       expect(game.total).toEqual(26);
     });

  });

  describe ("Score", function () {

    it("frameTotalScore is the sum of the frames", function () {
      // game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
      game.rolls = [10,null,9,0,5,5,6,2,7,3,4,6,2,6,7,1,8,1,6,2];
      game.frameTotal();
      expect(game.total).toBe(90);
    });

    it("bonusTotalScore is the sum of the bonus scores", function () {
      game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
      // game.whenSpare();
      // game.whenStrike();
      game.addBonus();
      expect(game.bonusTotalScores).toEqual(30);
    });

    // it("score is the fum of the frames and the bonus scores", function () {
    //   game.frameScores = [[10,null],[9,0],[5,5],[6,2],[7,3],[4,6],[2,6],[7,1],[8,1],[6,2]];
    //   game.scores();
    //   expect(game.score).toEqual(111);
    // });

    it("test game", function () {
      // game.frameScores = [[10,0],[7,3],[1,2]];
      game.rolls = [10,0,7,3,1,2];
      game.frameTotal();
      expect(game.total).toBe(23)
    });

  });

});
