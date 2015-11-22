describe("Player", function() {
  var player;
  var score;

  beforeEach(function() {
    score = {};
    player = new Player("Hamza", score);
  });

  describe("When instantiated:", function() {

    it("Player has a #name", function() {
      expect(player.name).toEqual("Hamza");
    });

    it("Player has a #score", function() {
      expect(player.score).toEqual(score);
    });
  });
});
