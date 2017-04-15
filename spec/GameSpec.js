describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  describe("framesLeft", function(){
    it("Should begin at 10", function() {
      expect(game.framesLeft).toEqual(10);
    });
  });

  describe("play", function(){
    it("moves the current frame's score to frames", function() {
      spyOn(game._frame, "rollScore").and.returnValue(4);
      for(i = 1; i <= 2; i++) {
        game.play();
      };
      expect(game.frames).toContain(8);
    });
  });
});
