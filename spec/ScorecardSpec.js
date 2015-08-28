describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('can see scores but no totals', function(){

    it('running total starts at zero', function(){
      expect(scorecard.runningTotal).toBeNull();
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

  describe('can calculate frame total', function(){

    it('shows the frame score', function(){
      scorecard.roll(3,5);
      expect(scorecard.frameTotal(1)).toBe(8);
    });

    it('adds additional points for bonuses for spares and shows score', function(){
      scorecard.roll(3,7); // this is roll 1 - We get a spare!
      scorecard.roll(5,4); // this is roll 2
      expect(scorecard.frameTotal(1)).toBe(15);
    });

    it('adds additional points for bonuses for a strike and shows score', function(){
      scorecard.roll(10,0); // this is roll 1 - We get a strike!
      scorecard.roll(5,4);  // this is roll 2
      expect(scorecard.frameTotal(1)).toBe(19);
    });

  });
});
