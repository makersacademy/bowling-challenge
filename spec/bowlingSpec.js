'use strict'

describe('BowlingMatch', function() {

  var bowlingmatch

  beforeEach(function(){
    bowlingmatch = new BowlingMatch();
  });

  describe('scoreSum', function() {

    it(' sums contents of array', function () {
      expect(bowlingmatch.scoreSum([3,5])).toEqual(8);
    });

  });

  // describe('roundScore', function() {
  //
  //   it(' returns an array with length 1 if first roll is 10', function() {
  //     var roundScore = bowlingmatch.roundScore(10);
  //     expect(roundScore.length).toEqual(1);
  //   });
  //
  //   it(' returns an array including 10 if first roll is 10', function() {
  //     expect(bowlingmatch.roundScore(10)).toEqual([10]);
  //   });
  //
  //   it(' returns an array including 4 and 5 if those 4 and 5 are rolled', function() {
  //     expect(bowlingmatch.roundScore(4, 5)).toEqual([4,5]);
  //   });
  //
  //   it(' increases the roundCount', function() {
  //     bowlingmatch.roundScore(2,3);
  //     expect(bowlingmatch.roundCount).toEqual(1);
  //   });
  //
  // });

  describe('strikeRounds', function() {
    it(' identifies the correct round a strike occured', function() {
      bowlingmatch.roundScore(4, 5);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(2, 4);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(10);
      expect(bowlingmatch.strikeRounds).toEqual([2,4,5]);
    });

    it(' identifies the correct round a spare occured', function() {
      bowlingmatch.roundScore(5, 5);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(3, 4);
      bowlingmatch.roundScore(9,0);
      bowlingmatch.roundScore(2,8);
      expect(bowlingmatch.spareRounds).toEqual([1,5]);
    });
  });

  describe('totalScore', function() {
    it('identifies the correct score if no strikes or spare are scored', function() {
      for (var i = 0; i < 10; i++) {
        bowlingmatch.roundScore(3, 4);
      }
      expect(bowlingmatch.totalScore()).toEqual(70);
    });

    it('identifies the correct score if strikes and spares are scored', function() {
      bowlingmatch.roundScore(4, 5);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(2, 4);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(5, 5);
      bowlingmatch.roundScore(10);
      bowlingmatch.roundScore(3, 4);
      bowlingmatch.roundScore(9,0);
      bowlingmatch.roundScore(2,7);

      expect(bowlingmatch.totalScore()).toEqual(138);
    });
  });


});
