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
  });

});
