describe("Score tests: ", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#score:", function() {
    it('should have a score of 10 after a strike', function() {
      game.go(5);
      expect(game.score()).toEqual(5);
    });

    it("a 'random' generation of X19828160XXX1933", function() {
      [10, 1, 9, 8, 2, 8, 1, 6, 0, 10, 10, 10, 1, 9, 3, 3].forEach(function(i) {
        game.go(i);
      });
      expect(game.score()).toEqual(161);
    });

    it("a 'random' generation of X19828160XXX19XXX", function() {
      [10, 1, 9, 8, 2, 8, 1, 6, 0, 10, 10, 10, 1, 9, 10, 10, 10].forEach(function(i) {
        game.go(i);
      });
      expect(game.score()).toEqual(222);
    });

    it("a 'random' generation of XXXXXXXXXXXX", function() {
      [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10].forEach(function(i, index) {
        console.log('BEFORE go, i: ' + i + ", score = " + game.score() + ", index: " + index);
        game.go(i);
      });
      expect(game.score()).toEqual(300);
    });
  });
});
