describe("Game", function() {

  var game = new Game();

  describe("At the start of the game:", function () {
    it("starts the game with a running score of 0", function() {
      expect(game.runningScore).toEqual(0);
    });
    it("starts the game on frame 1", function() {
      expect(game.currentFrame).toEqual(1);
    });
  });

  describe("The first two frames:", function () {
    it("on the first frame it returns the frame score 8 and updates the running score to 8", function(){
      expect(game.frame(3,5)).toEqual(8);
      expect(game.runningScore).toEqual(8);
    });
    it("at the start of the second frame the current frame is 2", function() {
      expect(game.currentFrame).toEqual(2);
    });
    it("on the second frame it returns the frame score 5 and updates the running score to 13", function() {
      expect(game.frame(4,1)).toEqual(5);
      expect(game.runningScore).toEqual(13);
    });
    it("can recall the frame score for frame 1", function() {
      expect(game.scoreCard[0].frameScore).toEqual(8)
    });
    it("can recall the running score for frame 1", function() {
      expect(game.scoreCard[0].runningScore).toEqual(8)
    });
  });

})
