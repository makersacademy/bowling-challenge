describe("Bowling Game", function() {
  var game = new BowlingGame();

  describe("Taking and saving rolls", function() {

    it("can take a roll", function() {
      game.roll(3)
      expect(game.CurrentFrame).toEqual([3])
    });

    it("", function() {});



  });

});