describe('Bowling', function(){

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe("scoring", function(){
    it('adds point to your total score', function(){
      bowling.addToTotal(3);
      expect(bowling.total).toEqual(3)
    });
  });
});
