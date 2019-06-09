'use strict';

describe('Frame', function() {
   var frame;
   var finalFrame;

   beforeEach(function() {
      frame = new Frame();
      finalFrame = new Frame(true);
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
      describe('normal frame', function() {
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

         it('throws error when recording more than two scores if no strike or spare', function() {
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

      describe('final frame', function() {
         it('adds first score to total score', function() {
            finalFrame.recordScore(1);
   
            expect(finalFrame.getTotalScore()).toEqual(1);
         });

         it('adds first and second scores to total score', function() {
            finalFrame.recordScore(1);
            finalFrame.recordScore(2);
   
            expect(finalFrame.getTotalScore()).toEqual(3);
         });

         it('can record a gutter roll', function() {
            finalFrame.recordScore(0);
   
            expect(finalFrame.getTotalScore()).toEqual(0);
         });

         it('can record a strike', function() {
            finalFrame.recordScore(10);
   
            expect(finalFrame.getTotalScore()).toEqual(10);
         });

         it('throws error when recording more than two scores if no strike or spare', function() {
            finalFrame.recordScore(1);
            finalFrame.recordScore(2);

            expect(function() { finalFrame.recordScore(4) })
               .toThrowError('Frame already ended');
         });

         it('can record two more scores after a strike', function() {
            finalFrame.recordScore(10);
            finalFrame.recordScore(10);
            finalFrame.recordScore(10);
   
            expect(finalFrame.getTotalScore()).toEqual(30);
         });

         it('throws error when recording a score greater than 10', function() {
            expect(function() { finalFrame.recordScore(11) }).toThrowError('Invalid score');
         });
   
         it('throws error when recording a score less than 0', function() {
            expect(function() { finalFrame.recordScore(-1) }).toThrowError('Invalid score');
         });
   
         it('throws error when second score is greater than the available pins',
         function() {
            finalFrame.recordScore(9);
   
            expect(function() { finalFrame.recordScore(2) }).toThrowError('Invalid score');
         });
      });
   });

   describe('#isStrike', function() {
      describe('normal frame', function() {
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

      describe('final frame', function() {
         it('returns true when first score is 10', function() {
            finalFrame.recordScore(10);
   
            expect(finalFrame.isStrike()).toEqual(true);
         });
   
         it('returns false when first score is 0 and second is 10', function() {
            finalFrame.recordScore(0);
            finalFrame.recordScore(10);
   
            expect(finalFrame.isStrike()).toEqual(false);
         });
   
         it('returns false when the two scores together are less than 10', function() {
            finalFrame.recordScore(1);
            finalFrame.recordScore(2);
   
            expect(finalFrame.isStrike()).toEqual(false);
         });
      });
   });

   describe('#isSpare', function() {
      describe('normal frame', function() {
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

      describe('final frame', function() {
         it('returns true when the two scores together are 10', function() {
            finalFrame.recordScore(5);
            finalFrame.recordScore(5);
   
            expect(finalFrame.isSpare()).toEqual(true);
         });
   
         it('returns false when the first roll is a strike', function() {
            finalFrame.recordScore(10);
   
            expect(finalFrame.isSpare()).toEqual(false);
         });
   
         it('returns false when the two scores together are less than 10', function() {
            finalFrame.recordScore(1);
            finalFrame.recordScore(2);
   
            expect(finalFrame.isSpare()).toEqual(false);
         });
      });
   });

   describe('#isEnded', function() {
      describe('normal frame', function() {
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

      describe('final frame', function() {
         it('returns false when the first roll is a strike', function() {
            finalFrame.recordScore(10);
   
            expect(finalFrame.isEnded()).toEqual(false);
         });

         it('returns false when it is a spare after two rolls', function() {
            finalFrame.recordScore(4);
            finalFrame.recordScore(6);
   
            expect(finalFrame.isEnded()).toEqual(false);
         });

         it('returns false after the first non-strike roll', function() {
            finalFrame.recordScore(5);
   
            expect(finalFrame.isEnded()).toEqual(false);
         });
   
         it('returns true when player rolled twice and it neither strike or spare', function() {
            finalFrame.recordScore(1);
            finalFrame.recordScore(2);
   
            expect(finalFrame.isEnded()).toEqual(true);
         });

         it('returns true when player rolled twice after a strike', function() {
            finalFrame.recordScore(10);
            finalFrame.recordScore(6);
            finalFrame.recordScore(8);
   
            expect(finalFrame.isEnded()).toEqual(true);
         });

         it('returns true when player rolled once after a spare', function() {
            finalFrame.recordScore(4);
            finalFrame.recordScore(6);
            finalFrame.recordScore(8);
   
            expect(finalFrame.isEnded()).toEqual(true);
         });
      });
   });

   describe('#addBonus', function() {
      it('adds bonus to total', function() {
         frame.recordScore(10);
         frame.addBonus(3);
         frame.addBonus(5);

         expect(frame.getTotalScore()).toEqual(18);
      });
   });

   describe('#getTotalScore', function() {
      describe('final frame', function() {
         it('returns 30 after a perfect frame', function() {
            finalFrame.recordScore(10);
            finalFrame.recordScore(10);
            finalFrame.recordScore(10);
   
            expect(finalFrame.getTotalScore()).toEqual(30);
         });
      });
   });
});