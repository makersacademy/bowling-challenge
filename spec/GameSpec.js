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
});
