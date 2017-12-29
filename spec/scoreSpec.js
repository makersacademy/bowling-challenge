describe("score", function() {
  describe("frame score", function() {
    it("should be able to score a frame that is not a strike or spare", function() {
      game = new Game();
      score = new Score();
      game.newFrame(3,2);
      game.newFrame(1,5);
      expect(game.score.calcScore()).toEqual(11);
    })
  })
})
