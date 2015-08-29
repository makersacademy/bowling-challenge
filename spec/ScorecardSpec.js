describe('Scorecard', function() {

  var scorecard = new Scorecard()

  describe('it returns', function(){
    it("0 when 0 has been rolled", function() {
      expect(scorecard.verifyRoll(0)).toEqual(0);
    });
    it("1 when 1 has been rolled", function() {
      expect(scorecard.verifyRoll(1)).toEqual(1);
    });
  });

  describe('it errors', function(){
    it("when 11 has been 'rolled'", function() {
      expect( function() {scorecard.verifyRoll(11); }).toThrow("Rolls can only score 0 to 10 inclusive");
    });
    it("when the sums of 2 rolls are greater than 10", function() {
      expect( function() {scorecard.verifyTurn(6,5); }).toThrow("Rolls can only score 0 to 10 inclusive");
    });
    it("when a negative number of pins has been 'rolled'", function() {
      expect( function() {scorecard.verifyRoll(-1); }).toThrow("Rolls can only score 0 to 10 inclusive");
    });
  });

  describe('it keeps track of which turn it is', function(){
    it("at the beginning", function(){
      var scorecard = new Scorecard();
      expect(scorecard.turnNumber).toEqual(1);
    });
    it("after one turn", function(){
      var scorecard = new Scorecard();
      scorecard.updateStorageWithTurn([1,1]);
      expect(scorecard.turnNumber).toEqual(2);
    });
    it("after two turns", function(){
      var scorecard = new Scorecard();
      for (turn = 1; turn < 3; turn++) {scorecard.updateStorageWithTurn([1,1])};
      expect(scorecard.turnNumber).toEqual(3);
    });
    it("after nine turns", function(){
      var scorecard = new Scorecard();
      for (turn = 1; turn < 10; turn++) {scorecard.updateStorageWithTurn([1,1])};
      expect(scorecard.turnNumber).toEqual(10);
    });

    it("and it knows when the game is over", function(){
      var scorecard = new Scorecard();
      for (turn = 1; turn < 10; turn++) {scorecard.updateStorageWithTurn([1,1])};
      expect( function() {scorecard.updateStorageWithTurn([1,1]); }).toThrow("You only get 10 turns");
    });
  });


  describe('it records', function() {
    it("a turn in an array", function(){
      scorecard.updateStorageWithTurn([3,3]);
      expect(scorecard.storage).toEqual([[3,3]]);
    });
    it("another turn in the same array", function(){
      scorecard.updateStorageWithTurn([2,2]);
      expect(scorecard.storage).toEqual([[3,3],[2,2]]);
    });
    it("a third turn in the same array", function(){
      scorecard.updateStorageWithTurn([1,1]);
      expect(scorecard.storage).toEqual([[3,3],[2,2],[1,1]]);
    });
  });

});
