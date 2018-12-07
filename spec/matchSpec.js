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

  describe('roundCheck', function() {
    it('checks how many rounds have been played, if 10 have been played it returns total score')
  })

})
