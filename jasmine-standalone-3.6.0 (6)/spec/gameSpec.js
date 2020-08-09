describe("Frame ", function() {
  var frame;
  var scorecard;

//   Enter each roll.
// ----------------

// As a bowler, 
// So I can keep track of my score,
// I was a scoreboard that calculates the number of pins I knocked down at each roll.

  describe('a single roll', function(){
    beforeEach(function() {
      frame = new Frame();
    });

    it('displays score for a single roll', function(){
      frame.enterFirstRollScore(3, scorecard);
      expect(frame.firstRollScore).toEqual(3);
    });
  });

});
