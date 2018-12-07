'use strict'

describe('Frame', function() {
  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  describe('playRound', function() {

    it(' returns an array with length 1 if first roll is 10', function() {
      var roundScoreArray = frame.playRound(10);
      expect(roundScoreArray.length).toEqual(1);
    });

    it(' returns an array including 10 if first roll is 10', function() {
      expect(frame.playRound(10)).toEqual([10]);
    });

    it(' returns an array including 4 and 5 if those 4 and 5 are rolled', function() {
      expect(frame.playRound(4, 5)).toEqual([4,5]);
    });

  })

})
