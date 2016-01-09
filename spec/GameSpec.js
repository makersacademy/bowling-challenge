describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#init", function(){
    it("starts with score 0", function() {
      expect(game.score).toEqual(0);
    })
  })

})
