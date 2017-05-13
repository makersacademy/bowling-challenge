describe("Bowling", function() {

  var game;

  beforeEach(function() {
  	game = new Bowling();
  });

  describe("frame", function() {
    it("returns '10' on a 10 for the first roll ", function() {
      game.frame(10)
      expect(game.game).toContain(10);
    });
    it("returns the score from two rolls of the ball", function() {
      game.frame(1,9)
      expect(game.game).toContain(10);
    });
    it("returns '6' on a toal score of 6", function() {
      game.frame(1,5)
      expect(game.game).toContain(6);
    });
    it("increments frameCount by 1", function() {
      game.frameIcrementer()
      expect(game.frameCount).toEqual(1);
    });
  });
  describe("score logger", function(){
    it("adds a score to the game array", function() {
      game.scoreLogger('X')
      expect(game.game).toContain('X')
    });
  });


});
