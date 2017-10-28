describe("Strike tests: ", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("points after a strike", function() {
    it('should gain more points after a strike', function() {
      game.go(10);
      expect(game.score()).toEqual(10);
      console.log("it's before second go");
      game.go(1);
      console.log("between the 1 and the 3");
      game.go(3);
      console.log("after the 3");
      expect(game.score()).toEqual(18);
    });
  });
});
