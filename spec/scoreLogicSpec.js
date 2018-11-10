describe("ScoreLogic", function() {

  var scoreLogic = new ScoreLogic();

  describe("#isNoMoreThanTen", function () {
    it('returns false if the sum of the two numbers is greater than 10', function() {
      expect(scoreLogic._isNoMoreThanTen(4,7)).toEqual(false);
    });
    it('returns true if the sum of the two numbers is less than 10', function() {
      expect(scoreLogic._isNoMoreThanTen(1,7)).toEqual(true);
    });
    it('returns true if the sum of the two numbers is equal to 10', function() {
      expect(scoreLogic._isNoMoreThanTen(10,0)).toEqual(true);
    });
  });

  describe("#isAStrike", function() {
    it('returns true if the player scores a strike', function() {
      expect(scoreLogic._isAStrike(10,0)).toEqual(true);
    });
    it('returns false if the player does not scores a strike', function() {
      expect(scoreLogic._isAStrike(5,2)).toEqual(false);
    });
  });

  describe("#isASpare", function() {
    it('returns true if the player scores a spare', function() {
      expect(scoreLogic._isASpare(5,5)).toEqual(true);
    })
    it('returns false if the player does not scores a spare', function() {
      expect(scoreLogic._isASpare(5,1)).toEqual(false);
    })
  });

  describe("#frame", function() {
    it('throws an error if the player enters an incorrect score', function() {
      expect(function() {scoreLogic.frame(5,7);}).toThrow("Incorrect score entered.")
    });
    it('returns strike if the player scores a strike', function() {
      expect(scoreLogic.frame(10,0)).toEqual("strike");
    });
    it('returns spare if the player scores a spare', function() {
      expect(scoreLogic.frame(5,5)).toEqual("spare");
    });
    it('returns continue if the player does not score a spare or a strike', function() {
      expect(scoreLogic.frame(1,3)).toEqual("continue");
    });
  });

})
