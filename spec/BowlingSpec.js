describe('Bowling', function(){

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('Basic Scoring', function() {
    it('should have a starting score of zero', function(){
      expect(bowling.score).toEqual(0);
    });

    it('should be able to increment the score by a given number', function() {
      bowling.scoreUp(2);
      expect(bowling.score).toEqual(2);
    });

    it('knows which frame it is on', function() {
      expect(bowling.bowlingFrame).toEqual(1);
    });

    it('knows how many pins are left', function() {
      expect(bowling.pinsLeft).toEqual(10);
    });

    it('can hit some pins', function() {
      bowling.bowl(6);
      expect(bowling.pinsLeft).toEqual(4);
      expect(bowling.score).toEqual(6);
    });

  });

});