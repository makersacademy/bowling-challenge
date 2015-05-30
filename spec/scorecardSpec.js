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

    it('can give bonuses for spikes', function(){

      bowling.pinsHit(10); //frame1

      bowling.pinsHit(5);
      bowling.pinsHit(2); //frame2

      console.log(bowling.scores[1]);
      console.log(bowling.scores[3]);

      bowling.calculateScore();

      expect(bowling.score).toEqual(24); //as opposed to 17


    });

  });

});