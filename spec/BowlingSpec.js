describe('Bowling', function(){
  
  beforeEach(function(){
    bowling = new Bowling()
  });

  describe('Frame', function(){
    
    it('has a score', function(){
      expect(bowling).toBeDefined(bowling.Score);
    });

    it('s score changes after every roll', function(){
      bowling.roll(2)
      expect(bowling.Score).toEqual(2)
      bowling.roll(3)
      expect(bowling.Score).toEqual(5)
    });


  // Frame block ends
  }); 
// Bowling block ends  
});