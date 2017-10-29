describe("Strike tests: ", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("points after a strike", function() {

    beforeEach(function() {
      game.go(10);
    });

    it('should gain more points after a strike', function() {
      expect(game.score()).toEqual(10);
      game.go(1);
      game.go(3);
      expect(game.score()).toEqual(18);
    });
  });
});
