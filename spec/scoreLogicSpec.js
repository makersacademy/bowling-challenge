describe("ScoreLogic", function() {

  var scoreLogic = new ScoreLogic();

  describe("#isNoMoreThanTen", function () {
    it('returns false if the sum of the two numbers is greater than 10', function() {
      expect(scoreLogic.isNoMoreThanTen(4,7)).toEqual(false);
    });
    it('returns true if the sum of the two numbers is less than 10', function() {
      expect(scoreLogic.isNoMoreThanTen(1,7)).toEqual(true);
    });
    it('returns true if the sum of the two numbers is equal to 10', function() {
      expect(scoreLogic.isNoMoreThanTen(10,0)).toEqual(true);
    });
  });

  describe("#isAStrike", function() {
    it('returns true if the player scores a strike', function() {
      expect(scoreLogic.isAStrike(10,0)).toEqual(true);
    });
    it('returns false if the player does not scores a strike', function() {
      expect(scoreLogic.isAStrike(5,2)).toEqual(false);
    });
  });

  describe("#isASpare", function() {
    it('returns true if the player scores a spare', function() {
      expect(scoreLogic.isASpare(5,5)).toEqual(true);
    })
    it('returns false if the player does not scores a spare', function() {
      expect(scoreLogic.isASpare(5,1)).toEqual(false);
    })
  });

})
// expect(function() {scoreLogic.isNoMoreThanTen(4, 7);}).toThrow("Incorrect score entered.")
