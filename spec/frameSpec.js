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

      it("does not have stike by default", function(){
         expect(frame.hasStrike()).toEqual(false);
      });

      it("does not have spare by default", function(){
         expect(frame.hasSpare()).toEqual(false);
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
   })
});