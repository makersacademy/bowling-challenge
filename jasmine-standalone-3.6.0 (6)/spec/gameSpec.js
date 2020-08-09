'use strict'

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
      scorecard = jasmine.createSpyObj('scorecard', ['captureFrame']);
      frame.enterFirstRollScore(3, scorecard);
      frame.enterSecondRollScore(2, scorecard)
    });

    it('displays score for a single roll', function(){
      expect(frame.firstRollScore).toEqual(3);
    });
  });

//   Calculate frame score.
// ----------------
// As a bowler, 
// So I can calculate my score for each frame,
// I want to see the total score for each frame for pins I have knocked out (not strike/10 down

  it('adds score of first roll to frame total', function(){
    frame.calculateTotalScore(frame)
    expect(frame.calculateTotalScore()).toEqual(3);
  })



it('displays score from second roll', function(){
  // frame.enterSecondRollScore(2, scorecard);
  expect(frame.secondRollScore).toEqual(2);
});

  it('adds total of frame to scorecard', function(){
     expect(scorecard.captureFrame).toHaveBeenCalledWith(frame);
  });

});