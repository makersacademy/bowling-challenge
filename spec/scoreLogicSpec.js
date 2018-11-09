describe("ScoreLogic", function() {

  var scoreLogic = new ScoreLogic();

  describe("#isNoMoreThanTen", function () {
    it('It returns false if the sum of the two numbers is greater than 10', function() {
      expect(scoreLogic.isNoMoreThanTen(4,7)).toEqual(false);
    });
    it('It returns true if the sum of the two numbers is less than 10', function() {
      expect(scoreLogic.isNoMoreThanTen(1,7)).toEqual(true);
    });
    it('It returns true if the sum of the two numbers is equal to 10', function() {
      expect(scoreLogic.isNoMoreThanTen(10,0)).toEqual(true);
    });
  });

})
  // expect(function() {scoreLogic.isNoMoreThanTen(4, 7);}).toThrow("Incorrect score entered.")
