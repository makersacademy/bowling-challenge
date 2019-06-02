'use strict';

describe('Frame', function() {
   var frame;

   beforeEach(function() {
      frame = new Frame();
   });

   describe('Defaults', function() {
      it("has a default total score of 0", function(){
         expect(frame.getTotalScore()).toEqual(0);
      });

      it("is not strike by default", function(){
         expect(frame.isStrike()).toEqual(false);
      });

      it("is not spare by default", function(){
         expect(frame.isSpare()).toEqual(false);
      });

      it('is not ended by default', function() {
         expect(frame.isEnded()).toEqual(false);
      });
   });

   describe('#recordScore', function() {
      it('adds first score to total score', function() {
         frame.recordScore(1);

         expect(frame.getTotalScore()).toEqual(1);
      });

      it('adds first and second scores to total score', function() {
         frame.recordScore(1);
         frame.recordScore(2);

         expect(frame.getTotalScore()).toEqual(3);
      });

      it('can record a gutter roll', function() {
         frame.recordScore(0);

         expect(frame.getTotalScore()).toEqual(0);
      });

      it('can record a strike', function() {
         frame.recordScore(10);

         expect(frame.getTotalScore()).toEqual(10);
      });

      it('throws error when recording more than two scores', function() {
         frame.recordScore(1);
         frame.recordScore(2);

         expect(function() { frame.recordScore(4) })
            .toThrowError('Frame already ended');
      });

      it('throws error when recording score after a strike', function() {
         frame.recordScore(10);

         expect(function() { frame.recordScore(1) })
            .toThrowError('Frame already ended');
      });

      it('throws error when recording a score greater than 10', function() {
         expect(function() { frame.recordScore(11) }).toThrowError('Invalid score');
      });

      it('throws error when recording a score less than 0', function() {
         expect(function() { frame.recordScore(-1) }).toThrowError('Invalid score');
      });

      it('throws error when second score is greater than the available pins',
      function() {
         frame.recordScore(9);

         expect(function() { frame.recordScore(2) }).toThrowError('Invalid score');
      });
   });

   describe('#isStrike', function() {
      it('returns true when first score is 10', function() {
         frame.recordScore(10);

         expect(frame.isStrike()).toEqual(true);
      });

      it('returns false when first score is 0 and second is 10', function() {
         frame.recordScore(0);
         frame.recordScore(10);

         expect(frame.isStrike()).toEqual(false);
      });

      it('returns false when the two scores together are less than 10', function() {
         frame.recordScore(1);
         frame.recordScore(2);

         expect(frame.isStrike()).toEqual(false);
      });
   });

   describe('#isSpare', function() {
      it('returns true when the two scores together are 10', function() {
         frame.recordScore(5);
         frame.recordScore(5);

         expect(frame.isSpare()).toEqual(true);
      });

      it('returns false when the first roll is a strike', function() {
         frame.recordScore(10);

         expect(frame.isSpare()).toEqual(false);
      });

      it('returns false when the two scores together are less than 10', function() {
         frame.recordScore(1);
         frame.recordScore(2);

         expect(frame.isSpare()).toEqual(false);
      });
   });

   describe('#isEnded', function() {
      it('returns true when the first roll is a strike', function() {
         frame.recordScore(10);

         expect(frame.isEnded()).toEqual(true);
      });

      it('returns true when player rolled twice', function() {
         frame.recordScore(1);
         frame.recordScore(2);

         expect(frame.isEnded()).toEqual(true);
      });

      it('returns false after the first non-strike roll', function() {
         frame.recordScore(5);

         expect(frame.isEnded()).toEqual(false);
      });
   });
});