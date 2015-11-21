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

  describe("A spare is scored in the first frame.", function() {
    it("A spare is marked as '/' in the scores array", function() {
      game.bowl(9);
      game.bowl(1);
      expect(game.scores).toEqual([9,'/']);  
    });

    it("If a 5 and 1 are bowled next the first frame will receive a bonus of 5", function() {
      game.bowl(9);
      game.bowl(1);
      game.bowl(5);
      game.bowl(1);
      game.totalFirstFrame();
      expect(game.frameScores[0]).toEqual(15);
    });  
  });

  describe("A strike is scored in the first frame.", function() {
    it("A strike is marked as 'X' in the scores array", function() {
      game.bowl(10);
      expect(game.scores).toEqual(['X']);  
    });

    it("If a 5 and 1 are bowled next the first frame will receive a bonus of 6", function() {
      game.bowl(10);
      game.bowl(5);
      game.bowl(1);
      game.totalFirstFrame();
      expect(game.frameScores[0]).toEqual(16);
    });  
  });
});