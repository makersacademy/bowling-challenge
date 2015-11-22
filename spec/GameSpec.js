describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function bowlHelper(bowlTimes, pinsHitOnEachBowl) {
    for (var i = 0; i < bowlTimes; i++) {
      game.bowl(pinsHitOnEachBowl);
    }
  } 

  describe("No pins are hit - gutter game", function() {
    it("final score should be zero", function() {
      bowlHelper(20,0);
      expect(game.finalScore()).toEqual(0);
    });
  });

  describe("One pin hit on each bowl", function() {
    it("final score should be 20", function() {
      bowlHelper(20,1);
      expect(game.finalScore()).toEqual(20);
    });
  });

  describe("A spare.", function() {
    it("a spare on first frame, then a 5 and all 0 rolls. Final score should be 20", function() {
      bowlHelper(3, 5);
      bowlHelper(17,0);
      expect(game.finalScore()).toEqual(20);
    });
  });
});