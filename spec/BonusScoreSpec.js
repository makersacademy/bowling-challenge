describe ("BonusScore", function() {
  var game = new BonusScores();

  describe ("spareBonus", function() {
    it("adds next rawScore to bonusScores", function() {
      game.frameScores = [[3,7],[6]];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([6]);
    });

  });
});
