describe('Scorecard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('can see scores but no totals', function(){

    it('cannot score more than 10 points for first roll', function(){
      expect(function() { scorecard.roll(11, 0) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points for second roll', function(){
      expect(function() { scorecard.roll(0, 11) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points for third roll', function(){
      expect(function() { scorecard.roll(0,0,11) }).toThrow(new Error("can't score more than 10!"));
    });

    it('cannot score more than 10 points based on two rolls', function(){
      expect(function() { scorecard.roll(5, 6) }).toThrow(new Error("You cannot score more than 10 from two rolls!"));
    });

    it('should allow only 10 frames', function(){
      for(i=0; i < 10; i++) {
        scorecard.roll(2,4);
      }
      expect(function() { scorecard.roll(5, 4) }).toThrow(new Error("You cannot play more than 10 frames!"));
    });

    it('cannot use 3rd roll for 10th frame if no strike/spare in frame 10', function(){
      for(i=0; i < 9; i++) {
        scorecard.roll(2,4);
      }
      expect(function() { scorecard.roll(5, 4, 3) }).toThrow(new Error("Cannot use 3rd roll as you did not have a strike"));
    });

  });

  describe('can calculate frame total', function(){

    it('shows the frame score', function(){
      scorecard.roll(3,5);
      expect(scorecard.frameTotal(1)).toBe(8);
    });

    it('shows the frame score as NaN when pending a roll due to a spare', function(){
      scorecard.roll(1,9);
      expect(scorecard.frameTotal(1)).toBeNaN();
    });

    it('adds additional bonus points for spares and shows score', function(){
      scorecard.roll(3,7); // this is roll 1 - We get a spare!
      scorecard.roll(5,4); // this is roll 2
      expect(scorecard.frameTotal(1)).toBe(15);
    });

    it('adds additional bonus points for a strike and shows score', function(){
      scorecard.roll(10,0); // this is roll 1 - We get a strike!
      scorecard.roll(5,4);  // this is roll 2
      expect(scorecard.frameTotal(1)).toBe(19);
    });

    it('adds additional bonus points for two consecutive strikes and shows score', function(){
      scorecard.roll(10,0);  // this is roll 1 - We get a strike! - 23
      scorecard.roll(10,0);  // this is roll 2 - 17
      scorecard.roll(3,4);   // this is roll 3 - 7
      expect(scorecard.frameTotal(1)).toBe(23);
    });

    it('adds additional bonus points for spares and followed by a strike and shows score', function(){
      scorecard.roll(1,9); // this is roll 1 - We get a spare!
      scorecard.roll(10,0); // this is roll 2
      expect(scorecard.frameTotal(1)).toBe(20);
    });

    it('should take total frame 9 to 30 if frame 9 and subsequent 2 rolls are strikes', function(){
      for(i=0; i < 8; i++) {
        scorecard.roll(0,0);
      }
      scorecard.roll(10,0);
      scorecard.roll(10,10,10);
      expect(scorecard.frameTotal(9)).toBe(30);
    });

    describe('calculates 10th frame total', function(){
      it('gives a total of 30 if player has 3 consecutive strikes', function(){
        for(i=0; i < 9; i++) {
          scorecard.roll(0,0);
        }
        scorecard.roll(10,10,10);
        expect(scorecard.frameTotal(10)).toBe(30);
      });

      it('calculates correct total if player has no strike or spare', function(){
        for(i=0; i < 9; i++) {
          scorecard.roll(0,0);
        }
        scorecard.roll(1,1);
        expect(scorecard.frameTotal(10)).toBe(2);
      });

      it('calculates correct total if player has a spare', function(){
        for(i=0; i < 9; i++) {
          scorecard.roll(0,0);
        }
        scorecard.roll(9,1,2);
        expect(scorecard.frameTotal(10)).toBe(12);
      });

      it('calculates correct total if player has a spare & a strike(on 3rd roll)', function(){
        for(i=0; i < 9; i++) {
          scorecard.roll(0,0);
        }
        scorecard.roll(9,1,10);
        expect(scorecard.frameTotal(10)).toBe(20);
      });

    });

  });

  describe('calculates running total', function(){

    it('running total starts at zero', function(){
      expect(scorecard.runningTotal()).toBe(0);
    });

    it('collates frame totals within running total', function(){
      expect(scorecard.frameTotals.length).toBe(0);
      scorecard.roll(2,0);
      scorecard.runningTotal();
      expect(scorecard.frameTotals.length).toBe(1);
    });

    it('returns the running total value', function(){
      scorecard.roll(2,0);
      scorecard.roll(2,0);
      expect(scorecard.runningTotal()).toBe(4);
    });

    it('does not update running total if expecting a bonus roll', function(){
      scorecard.roll(2,8);
      expect(scorecard.runningTotal()).toBe(0);
    });

    it('rolls the following: 1,3,1,9,10,0 and expect running score of 24', function(){
      scorecard.roll(1,3);
      scorecard.roll(1,9);
      scorecard.roll(10,0);
      expect(scorecard.runningTotal()).toBe(24);
    });

    it('rolls 3 consecutive strikes and a spare & expects running score of 40', function(){
      scorecard.roll(10,0); // 30
      scorecard.roll(10,0); // 29
      scorecard.roll(10,0); // 20
      scorecard.roll(9,1);  //      --- total is 79
      expect(scorecard.runningTotal()).toBe(79);
    });

    it('expects to score 300 for perfect game', function(){
      for(i=0; i < 9; i++) {
        scorecard.roll(10,0);
      }
      scorecard.roll(10,10,10);
      expect(scorecard.runningTotal()).toBe(300);
    });

  });
});
