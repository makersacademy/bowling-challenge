describe("BowlingGame", function(){

  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });


  describe("#initialize new game", function() {
    it("has a maximun of 10 frames", function() {
      expect(bowlingGame.maxFrames).toEqual(10);
    });

    it("has a default score of 0", function() {
      expect(bowlingGame.score).toEqual(0);
    });

    it("has 10 pins", function() {
      expect(bowlingGame.pins).toEqual(10);
    });
  });

  describe("#gutter game", function() {
    it("ends with a score of 0", function() {
      for (var i=0; i <20; i++) {
        bowlingGame.bowl(0);
      }
      expect(bowlingGame.score()).toEqual(0);
    });
  });

});
