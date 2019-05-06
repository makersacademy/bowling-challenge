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
  });
});