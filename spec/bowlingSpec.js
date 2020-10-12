describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('game', function() {

    it('returns 3 ', function() {
      bowling.game(1,2);
      expect(bowling.score).toEqual(3)
    });

    it('changes is_strike to true when a strike is scored', function(){
      bowling.game(10,0);
      expect(bowling.is_strike).toEqual(true)
      expect(bowling.frame).toEqual(2)
    }); 

    it('changes is_double to true when two strikes are scored', function(){
      bowling.game(10,0);
      bowling.game(10,0);
      expect(bowling.is_double).toEqual(true)
    }); 
    it('changes is_spare to true when a spare is scored', function(){
      bowling.game(5,5);
      expect(bowling.is_spare).toEqual(true)
    }); 
    it('changes strike, double and spare to false when neither of them are scored', function(){
      bowling.game(5,4);
      expect(bowling.is_spare).toEqual(false)
      expect(bowling.is_strike).toEqual(false)
      expect(bowling.is_double).toEqual(false)
    }); 
  });
     
    it ('changes frame from 1 to 2 when game is called ', function (){
      bowling.game(2,3);
      expect(bowling.frame).toEqual(2)

    });
  });