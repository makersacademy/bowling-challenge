describe('Scorecard', function(){

  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('scorecard', function(){

    it('roll score is zero at the begining', function(){
      expect(scorecard.indRoll).toBe(0);
    });

    it('sum of rolls is zero at the begining', function(){
      expect(scorecard.frameTotal).toBeNull;
    });

    it('sum of all frames is zero at the begining', function(){
      expect(scorecard.sumTotal).toBe(0);
    });

    it('can reqister rolls', function(){
      scorecard.regRolls(1, 1)
      expect(scorecard.frameTotal).toBe(2);
    });

    it('first roll must be under 10', function(){
        expect(function() { scorecard.regRolls(11, 0) }).toThrow(new Error("wrong number!"));
    });

    it('second roll must be under 10', function(){
        expect(function() { scorecard.regRolls(0, 11) }).toThrow(new Error("wrong number!"));
    });

    it('sum of each roll in a round cannot exceed 10', function() {
      expect(function() { scorecard.regRolls(2, 9) }).toThrow(new Error("that is too much!"));
    });

    it('wont allow more than 10 rounds', function(){
      for(i=0; i < 11; i++) {
        scorecard.regRolls(1, 1);
      }
      expect(function() { scorecard.regRolls(1, 1) }).toThrow(new Error("no more rounds!"));
    });
  });
});
