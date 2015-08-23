describe('Scorecard', function() {

  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('it displays', function(){
    it("0 when 0 has been rolled", function() {
      expect(scorecard.recordRoll(0)).toEqual(0);
    })
    it("1 when 1 has been rolled", function() {
      expect(scorecard.recordRoll(1)).toEqual(1);
    })
    it("2 when 2 has been rolled", function() {
      expect(scorecard.recordRoll(2)).toEqual(2);
    })
    it("3 when 3 has been rolled", function() {
      expect(scorecard.recordRoll(3)).toEqual(3);
    })
    it("4 when 4 has been rolled", function() {
      expect(scorecard.recordRoll(4)).toEqual(4);
    })
    it("5 when 5 has been rolled", function() {
      expect(scorecard.recordRoll(5)).toEqual(5);
    })
    it("6 when 6 has been rolled", function() {
      expect(scorecard.recordRoll(6)).toEqual(6);
    })
    it("7 when 7 has been rolled", function() {
      expect(scorecard.recordRoll(7)).toEqual(7);
    })
    it("8 when 8 has been rolled", function() {
      expect(scorecard.recordRoll(8)).toEqual(8);
    })
    it("9 when 9 has been rolled", function() {
      expect(scorecard.recordRoll(9)).toEqual(9);
    })
    it("10 when 10 has been rolled", function() {
      expect(scorecard.recordRoll(10)).toEqual(10);
    })
  });
});
