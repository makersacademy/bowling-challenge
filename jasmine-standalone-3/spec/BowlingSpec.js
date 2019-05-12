describe('Bowling', function(){

  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('score', function(){
    it('should be able to calculate a gutter', function(){
      for(let i = 0; i < 20; i++){
        bowling.roll(0);
      };
      expect(bowling.score()).toEqual(0);
    });

    it('should be able to calculate all 1', function(){
      for(let i = 0; i <20; i++){
        bowling.roll(1)
      };
      expect(bowling.score()).toEqual(20);
    });

    it('is able to calculate spares', function(){
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(2)
      bowling.roll(0)
      expect(bowling.score()).toEqual(14);
    });

    it('can calculate complex spares', function(){
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(3);
      bowling.roll(5);
      bowling.roll(6);
      bowling.roll(4);
      bowling.roll(4);
      bowling.roll(0);
      bowling.roll(4);
      bowling.roll(6);
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(3);
      expect(bowling.score()).toEqual(70)
    });
  });

  describe('roll', function(){
    it('gives an error if more than 10 pins are hit per frame', function(){
      bowling.roll(8);
      expect(function(){ bowling.roll(3)}).toThrow('You can only hit 10 pins per frame');
    });
  });
});