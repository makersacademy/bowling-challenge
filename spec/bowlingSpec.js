describe('Bowling', function(){
    // method statement
    var bowling;
    beforeEach(function() {
      bowling = new Bowling();
    });
  
    it('score at the start of the game is 0', function() {
      expect(bowling.getTotalScore()).toEqual(0);

    });


});
