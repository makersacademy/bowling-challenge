'use strict'

describe('Match', function() {

  var match;

  beforeEach(function(){
    match = new Match();
  });

  describe('roundCount', function() {
    it('keeps a record of the number of rounds played', function() {
      match.playFrame(1, 2);
      match.playFrame(3,4);
      match.playFrame(2,4);

      expect(match.roundCount).toEqual(3);
    })
  })

  describe('addToScoreArray', function() {
    it('adds the rolls from a frame to an array', function() {
      match.playFrame(1, 2);
      match.playFrame(3,4);
      match.playFrame(10);

      expect(match.runningFrameScores).toEqual([[1,2],[3,4],[10]])
    })
  })

  describe('identifyMultiplierRounds', function() {
    it(' identifies the correct round a strike occured', function() {
      match.playFrame(4, 5);
      match.playFrame(10);
      match.playFrame(2, 4);
      match.playFrame(10);
      match.playFrame(10);
      expect(match.strikeRounds).toEqual([2,4,5]);
    });

    it(' identifies the correct round a spare occured', function() {
      match.playFrame(5, 5);
      match.playFrame(10);
      match.playFrame(3, 4);
      match.playFrame(9,0);
      match.playFrame(2,8);
      expect(match.spareRounds).toEqual([1,5]);
    });

  })

  describe('addToRunningScoreArray', function() {
    it('pushed the running score to an array' , function() {
      for (var i = 0; i < 10; i++) {
        match.playFrame(3, 4);
      }

      expect(match.runningScoreArray).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 70])

    })
  })

  describe('finalRoundCheck', function() {
    it('if 10 have been played without finishing on a strike or spare return finalScore', function() {

      for (var i = 0; i < 10; i++) {
        match.playFrame(3, 4);
      }
      // 
      // var rounds = match.roundCount;
      // var framesArray = match.runningFrameScores;

    expect(match.finalRoundCheck()).toEqual(70)
    })
  })

})
