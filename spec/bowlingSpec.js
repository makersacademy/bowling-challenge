describe('Bowling Scorecard', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('simple scoring', function(){

    it('can keep track of the bowling score', function(){

      bowling.pinsHit(7);
      bowling.pinsHit(1);

      bowling.calculateScore();

      expect(bowling.score).toEqual(8);

    });

  });

});