describe('Bowling Scorecard', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('simple scoring', function(){

    it('can keep track of the bowling score', function(){

      bowling.pinsHit(7);
      bowling.pinsHit(1);

      bowling.scoreGame();

      expect(bowling.score).toEqual(8);

    });

  });

  describe('more complicated scoring', function(){

    it('can give bonuses for spikes', function(){

      bowling.pinsHit(10); //frame1

      bowling.pinsHit(5);
      bowling.pinsHit(2); //frame2

      bowling.scoreGame();

      expect(bowling.score).toEqual(24); //as opposed to 17

    });

    it('can also give bonuses for spares', function(){

      bowling.pinsHit(5);
      bowling.pinsHit(5);


      bowling.pinsHit(6);
      bowling.pinsHit(1);

      bowling.scoreGame();

      expect(bowling.score).toEqual(23); //as opposed to 17
    })

  });

});