describe('Score',function(){
  var score;

  beforeEach(function(){
    score = new Score();
  });

  describe('start', function(){
    it('initialises with a bonus of 0', function(){
      expect(score.bonusScore).toEqual(0);
    });
    it('initialises with a previous bonus of 0', function(){
      expect(score.bonusScorePrevious).toEqual(0);
    });
  });

  describe('calculate', function(){
    it('returns 7,0,0 for the first rolls if they are 3 and 4', function(){
      var returned = score.calculate(3,4,0)
      expect(returned[0]).toEqual(7);
      expect(returned[1]).toEqual(0);
      expect(returned[2]).toEqual(0);
    });
    it('returns 10,10,0 if the previous and current rolls are strikes', function(){
      score.calculate(10,null,2);
      var returned = score.calculate(10,null,2);
      expect(returned[0]).toEqual(10);
      expect(returned[1]).toEqual(10);
      expect(returned[2]).toEqual(0);
    });
  });
  describe('saving the previous roll', function(){
    it('saves the previous roll in instance variables', function(){
      score.saveRoll(1,2,0);
      expect(score.roll1).toEqual(1);
      expect(score.roll2).toEqual(2);
      expect(score.bonus).toEqual(0);
    });

  });
});
