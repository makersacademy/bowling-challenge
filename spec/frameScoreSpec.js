describe("FrameScore", function() {

  var frameScore = new FrameScore();

  describe("#isMoreThanTen", function () {
    it('returns true if the sum of the two numbers is greater than 10', function() {
      expect(frameScore._isMoreThanTen(4,7)).toEqual(true);
    });
    it('returns false if the sum of the two numbers is less than 10', function() {
      expect(frameScore._isMoreThanTen(1,7)).toEqual(false);
    });
    it('returns false if the sum of the two numbers is equal to 10', function() {
      expect(frameScore._isMoreThanTen(10,0)).toEqual(false);
    });
  });

  describe("#isAStrike", function() {
    it('returns true if the player scores a strike', function() {
      expect(frameScore._isAStrike(10,0)).toEqual(true);
    });
    it('returns false if the player does not scores a strike', function() {
      expect(frameScore._isAStrike(5,2)).toEqual(false);
    });
  });

  describe("#isASpare", function() {
    it('returns true if the player scores a spare', function() {
      expect(frameScore._isASpare(5,5)).toEqual(true);
    })
    it('returns false if the player does not scores a spare', function() {
      expect(frameScore._isASpare(5,1)).toEqual(false);
    })
  });

  describe("#frame", function() {
    it('throws an error if the player enters an incorrect score', function() {
      expect(function() {frameScore.frame(5,7);}).toThrow("Incorrect score entered.")
    });
    it('returns strike if the player scores a strike', function() {
      expect(frameScore.frame(10,0)).toEqual("Strike");
    });
    it('returns spare if the player scores a spare', function() {
      expect(frameScore.frame(5,5)).toEqual("Spare");
    });
    it('returns the sum of the bowls if the player does not score a spare or a strike', function() {
      expect(frameScore.frame(1,3)).toEqual(4);
    });
  });

})
