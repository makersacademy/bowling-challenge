describe('Scorecard', function() {

  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('it displays', function(){
    it("0 when 0 has been rolled for roll a", function() {
      expect(scorecard.recordRollA(0)).toEqual(0);
    })
    it("1 when 1 has been rolled for roll a", function() {
      expect(scorecard.recordRollA(1)).toEqual(1);
    })
    it("error when 11 has been 'rolled' for roll a", function() {
      expect(scorecard.recordRollA(11)).toEqual("Invalid pin amount");
    })
    it("0 when 0 has been rolled for roll b", function() {
      expect(scorecard.recordRollB(0)).toEqual(0);
    })
    it("1 when 1 has been rolled for roll b", function() {
      expect(scorecard.recordRollB(1)).toEqual(1);
    })
    it("error when 11 has been 'rolled' for roll b", function() {
      expect(scorecard.recordRollB(11)).toEqual("Invalid pin amount");
    })
  });

  describe('it errors', function(){
    it("when the sums of 2 rolls are greater than 10", function() {
      expect(scorecard.recordTurn(6,5)).toEqual("Invalid pin amount");
    });
  });
});
