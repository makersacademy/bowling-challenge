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

  describe("No pins are hit - gutter game.", function() {
    it("The final score should be zero", function() {
      bowlHelper(20,0);
      expect(game.finalScore()).toEqual(0);
    });
  });

  describe("One pin hit on each bowl.", function() {
    it("The final score should be 20", function() {
      bowlHelper(20,1);
      expect(game.finalScore()).toEqual(20);
    });
  });

  describe("All strikes - perfect game.", function() {
    it("The final score should be 300", function() {
      bowlHelper(12, 10);
      expect(game.finalScore()).toEqual(300);
    });
  });

  describe("A spare.", function() {
    it("A spare on first frame, then all 1's. Final score should be 29", function() {
      bowlHelper(2, 5);
      bowlHelper(18,1);
      expect(game.finalScore()).toEqual(29);
    });
  });

  describe("A strike.", function() {
    it("A strike on first frame, then all 1's. Final score should be 30", function() {
      bowlHelper(1, 10);
      bowlHelper(18, 1);
      expect(game.finalScore()).toEqual(30);
    });
  });
});