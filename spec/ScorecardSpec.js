describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('can see scores', function(){

    it('running total starts at zero', function(){
      expect(scorecard.runningTotal).toBeNull();
    });

    it('frame total starts at zero', function(){
      expect(scorecard.frameTotal).toBeNull();
    });

    it('cannot score more than 10 points for first roll', function(){
      expect(function() { scorecard.roll(11, 0) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points for second roll', function(){
      expect(function() { scorecard.roll(0, 11) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points based on two rolls', function(){
      expect(function() { scorecard.roll(5, 6) }).toThrow(new Error("You cannot score more than 10 from two rolls!"));
    });

    it('should allow only 10 frames', function(){
      for(i=0; i < 11; i++) {
        scorecard.roll(2,4);
      }
      expect(function() { scorecard.roll(5, 4) }).toThrow(new Error("You cannot play more than 10 frames!"));
    });
  });
});
