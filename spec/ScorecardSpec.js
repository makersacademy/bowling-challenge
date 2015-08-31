describe('Scorecard', function() {

  var scorecard;
  beforeEach(function() {
      scorecard = new Scorecard();
  });

  describe('it returns', function(){
    it("0 when 0 has been rolled", function() {
      expect(scorecard.verifyRoll(0)).toEqual(0);
    });
    it("1 when 1 has been rolled", function() {
      expect(scorecard.verifyRoll(1)).toEqual(1);
    });
    it("a flattened array when requested", function(){
      expect(scorecard.flatten([[2,3],[4,5]])).toEqual([2,3,4,5]);
    });
    it("a total score when requested", function(){
      scorecard.roll(1);
      scorecard.roll(2);
      scorecard.roll(3);
      scorecard.roll(4);
      expect(scorecard.cumulativeScore(scorecard.gameStorage)).toEqual(10);
    });
  });

  describe('it errors when', function(){
    it("a number over 10 has been 'rolled'", function() {
      expect( function() {scorecard.verifyRoll(11); }).toThrow("Rolls can only score 0 to 10 inclusive");
    });
    it("a negative number of pins has been 'rolled'", function() {
      expect( function() {scorecard.verifyRoll(-1); }).toThrow("Rolls can only score 0 to 10 inclusive");
    });
    it("the total for a turn is greater than 10", function() {
      expect( function() {scorecard.verifyTurn(6,5); }).toThrow("Before bonuses, two rolls can only score 0 to 10 inclusive");
    });
    it("you try to take a turn past the 10th", function(){
      for (turn = 1; turn < 11; turn++) {scorecard.updateGameStorageWithTurn([1,1])};
      expect( function() {scorecard.updateGameStorageWithTurn([1,1]); }).toThrow("You only get 10 turns");
    });
  });

  describe('it groups rolls into turns', function(){
    it("taking two rolls and outputting an array of them", function(){
      scorecard.roll(1);
      scorecard.roll(2);
      expect(scorecard.gameStorage).toEqual([[1,2]]);
    });
    it("tracking which part of the turn we're in after one roll", function(){
      scorecard.roll(1);
      expect(scorecard.currentStageOfTurn).toEqual(2);
    });
    it("tracking which part of the turn we're in after two rolls", function(){
      scorecard.roll(1);
      for (turn = 1; turn < 2; turn++) {scorecard.roll(1)};
      expect(scorecard.currentStageOfTurn).toEqual(1);
    });
    it("taking a third roll and recognising it as part of a new turn", function(){
      scorecard.roll(1);
      scorecard.roll(2);
      scorecard.roll(3);
      expect(scorecard.currentTurnStorage).toEqual([3]);
    });
  });

  describe('it keeps track of which turn it is', function(){
    it("at the beginning", function(){
      expect(scorecard.turnNumber).toEqual(1);
    });
    it("after one turn", function(){
      scorecard.updateGameStorageWithTurn([1,1]);
      expect(scorecard.turnNumber).toEqual(2);
    });
    it("after two turns", function(){
      for (turn = 1; turn < 3; turn++) {scorecard.updateGameStorageWithTurn([1,1])};
      expect(scorecard.turnNumber).toEqual(3);
    });
    it("after nine turns", function(){
      for (turn = 1; turn < 10; turn++) {scorecard.updateGameStorageWithTurn([1,1])};
      expect(scorecard.turnNumber).toEqual(10);
    });
    it("and it knows when the game is over", function(){
      for (turn = 1; turn < 11; turn++) {scorecard.updateGameStorageWithTurn([1,1])};
      expect( function() {scorecard.updateGameStorageWithTurn([1,1]); }).toThrow("You only get 10 turns");
      expect(scorecard.turnNumber).toEqual("Game Over");
    });
    it("can play an entire, non bonus game", function(){
      for (turn = 1; turn < 11; turn++) {scorecard.updateGameStorageWithTurn([1,1])};
      expect(scorecard.cumulativeScore(scorecard.gameStorage)).toEqual(20);
    });
  });

  describe('it records', function() {
    it("two rolls as a turn", function(){
      scorecard.roll(1);
      scorecard.roll(2);
      expect(scorecard.gameStorage).toEqual([[1,2]]);
    });
    it("a turn in a game array", function(){
      scorecard.updateGameStorageWithTurn([3,3]);
      expect(scorecard.gameStorage).toEqual([[3,3]]);
    });
    it("another turn in the same array", function(){
      scorecard.updateGameStorageWithTurn([3,3]);
      scorecard.updateGameStorageWithTurn([2,2]);
      expect(scorecard.gameStorage).toEqual([[3,3],[2,2]]);
    });
    it("a third turn in the same array", function(){
      scorecard.updateGameStorageWithTurn([3,3]);
      scorecard.updateGameStorageWithTurn([2,2]);
      scorecard.updateGameStorageWithTurn([1,1]);
      expect(scorecard.gameStorage).toEqual([[3,3],[2,2],[1,1]]);
    });
  });

  describe("it understands bowling's bonus system including", function() {
    it("what a spare is", function(){
      expect(scorecard.isASpare([4,6])).toBe(true);
    });
    it("what a spare isn't", function(){
      expect(scorecard.isASpare([4,5])).toBe(false);
    });
    it("what a spare isn't, even when it's a strike", function(){
      expect(scorecard.isASpare([10,0])).toBe(false);
    });
    it("that 'spares' have the next roll added to them", function(){
      scorecard.roll(4);
      scorecard.roll(6);
      scorecard.roll(5);
      scorecard.roll(3);
      expect(scorecard.gameStorage).toEqual([[4,6,5],[5,3]]);
    });
    it("what a strike is", function(){
      expect(scorecard.isAStrike([10,0])).toBe(true);
    });
    it("what a strike isn't", function(){
      expect(scorecard.isAStrike([5,5])).toBe(false);
    });
    it("that 'strikes' have both rolls of the next turn added", function(){
      scorecard.roll(10);
      scorecard.roll(0);
      scorecard.roll(5);
      scorecard.roll(3);
      expect(scorecard.gameStorage).toEqual([[10,0,5,3],[5,3]]);
    });
    it("that 'strikes' have the next 2 rolls added to even if there's another strike", function(){
      scorecard.roll(10);
      scorecard.roll(0);
      scorecard.roll(10);
      scorecard.roll(0);
      scorecard.roll(5);
      scorecard.roll(3);
      expect(scorecard.gameStorage).toEqual([[10,0,10,0,5],[10,0,5,3],[5,3]]);
    });
    it("that a string of 'strikes' can give you a 3rd ball on round 10", function(){
      for (turn = 1; turn <= 9; turn++) {scorecard.roll(10); scorecard.roll(0)};
      scorecard.roll(10); scorecard.roll(10); scorecard.roll(10);
      expect(scorecard.gameStorage).toEqual([[10,0,10,0,10],[10,0,10,0,10],
        [10,0,10,0,10],[10,0,10,0,10],[10,0,10,0,10],[10,0,10,0,10],
        [10,0,10,0,10],[10,0,10,0,10],[10,0,10,10],[10,10,10]]);
      expect(scorecard.cumulativeScore(scorecard.gameStorage)).toEqual(300);
    });
    it("that a string of 'spares' can give you a 3rd ball on round 10", function(){
      for (turn = 1; turn <= 9; turn++) {scorecard.roll(5); scorecard.roll(5)};
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(5);
      expect(scorecard.gameStorage).toEqual([[5,5,5],[5,5,5],
        [5,5,5],[5,5,5],[5,5,5],[5,5,5],
        [5,5,5],[5,5,5],[5,5,5],[5,5,5]]);
      expect(scorecard.cumulativeScore(scorecard.gameStorage)).toEqual(150);
    });
    it("that a string of 'strikes' won't give you a 4th ball on round 10", function(){
      for (turn = 1; turn <= 9; turn++) {scorecard.roll(10); scorecard.roll(0)};
      scorecard.roll(10);
      scorecard.roll(10);
      scorecard.roll(10);
      scorecard.roll(10);
      expect( function() {scorecard.updateGameStorageWithTurn([1,1]); }).toThrow("You only get 10 turns");
    });
  });
});
