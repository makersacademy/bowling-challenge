describe("score", function() {
  describe("frame score", function() {
    it("should be able to score a frame that is not a strike or spare", function() {
      game = new Game();
      game.newFrame(3,2);
      game.newFrame(1,5);
      expect(game.score.calcScore()).toEqual(11);
    });
  });
  describe("spareChecker", function(){
    it("should show that it is a spare if it is a spare", function() {
      game = new Game();
      game.newFrame(4,6);
      expect(game.score.spareChecker()).toEqual(true);
    });
    it("should calculate the bonus of bowling a spare", function() {
      game = new Game();
      game.newFrame(4,6);
      game.newFrame(3,4);
      expect(game.score.calcScore()).toEqual(20);
    });
  });
});
