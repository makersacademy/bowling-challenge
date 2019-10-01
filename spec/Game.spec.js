var Game = require('../public/bowling');

describe("BowlingGame", function() {
  var bowlingGame;
  context("#addThrow", function() {
    it("should store a new throw", function() {
      bowlingGame = new Game();
      bowlingGame.addThrow("5");
      expect(bowlingGame.throws['#f1-b1']).toBe("5");
    });
    it('should only accept numbers', function() {
      bowlingGame = new Game();
      function addInvalidThrow() {
        bowlingGame.addThrow('abc')
      }
      expect(addInvalidThrow).toThrowError('#addThrow() only takes numbers as input');
    });
  });
});
