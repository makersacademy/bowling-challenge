describe('Bowling', function(){
  var bowling;

  beforeEach( function(){
    bowling = new Bowling();
  });


  describe('initialize', function(){
    it('has starting score of zero', function(){
      expect(bowling.total()).toEqual(0);
    });

    it('has a maximum score of 300', function(){
      expect(bowling.maxScore()).toEqual(300);
    });
  });

  describe('add score', function(){
    it('should add 10 to the total', function(){
      expect(bowling.addScore(10)).toEqual(10);
    });

    it('cannot add more than 10 to score at a time', function(){
      expect(bowling.addScore(11)).toEqual('Cannot add more than 10');
    });
  });

  describe('frame', function(){
    it('adds to counter if less than 2', function(){
      bowling.frame(10);
      bowling.frame(10);
      expect(bowling._counter).toEqual(2);
    });
    it('return counter to 0 if played more than twice', function(){
      bowling.frame(10);
      bowling.frame(10);
      bowling.frame(10);
      expect(bowling._counter).toEqual(0);
    });
  });

});
