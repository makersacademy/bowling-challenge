describe('Bowling', function() {
  var bowling;

    beforeEach(function() {
        game = new Bowling();
    });

    it("expects a score sheet to exist", function() {
      expect(game.scoreSheet).toBeDefined()
    });
});
