'use strict';

describe('Frame', function() {
 var frame;

 beforeEach(function(){
   frame = new Frame(1);
 });

 it('has empty bonusRolls by default', function() {
   expect(frame.bonusRolls).toEqual([]);
 });

 it('has empty rolls by default', function() {
   expect(frame.rolls).toEqual([]);
 });

 it('takes frameNumber as argument', function() {
   expect(frame.frameNumber).toEqual(1);
 });


 describe('#recordRoll', function(){
   it('takes roll as an argument and adds it to roll array', function() {
     var roll = new Roll(7,1,1);
     frame.recordRoll(roll);
     expect(frame.rolls).toEqual([roll]);
   });
   it('throws an error if score > limit', function() {
     var rollFirst = new Roll(2,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(9,1,1);
     expect(function(){frame.recordRoll(rollSecond);}).toThrow(
       new Error ('score can not be more than limit')
     );
   });
 });

 describe('#normalRollsScore', function() {
   it('returns correct score from two or one roll for one frame', function() {
     var rollFirst = new Roll(7,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(2,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.normalRollsScore()).toEqual(9);
   });
 });

 describe('#isStrike', function() {
   it('returns true if knocks down all 10 pins\
   with the first roll in a frame', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     expect(frame.isStrike()).toBe(true);
   });

   it('returns false if knocks down not all 10 pins\
   with the first roll in a frame', function() {
     var rollFirst = new Roll(9,1,1);
     frame.recordRoll(rollFirst);
     expect(frame.isStrike()).toBe(false);
   });

   it('returns false if knocks down all 10 pins\
   with two rolls in a frame', function() {
     var rollFirst = new Roll(7,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isStrike()).toBe(false);
   });
 });

 describe('#isSpare', function() {
   it('returns true if knocks down all 10 pins\
   with the two rolls of a frame', function() {
     var rollFirst = new Roll(7,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isSpare()).toBe(true);
   });

   it('returns false if knocks down not all 10 pins\
   with the two rolls of a frame', function() {
     var rollFirst = new Roll(5,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isSpare()).toBe(false);
   });

   it('returns false if knocks down all 10 pins\
   with the first roll of a frame', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     expect(frame.isSpare()).toBe(false);
   });
 });

 describe('#isBadLuck', function() {
   it('returns true if knocks down zero pins with\
   the two rolls of a frame', function() {
     var rollFirst = new Roll(0,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(0,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isBadLuck()).toBe(true);
   });

   it('returns false if knocks down not zero pins with\
   the two rolls of a frame', function() {
     var rollFirst = new Roll(5,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isBadLuck()).toBe(false);
   });

   it('returns false if knocks down zero pins with\
   first roll of a frame', function() {
     var rollFirst = new Roll(0,1,1);
     frame.recordRoll(rollFirst);
     expect(frame.isBadLuck()).toBe(false);
   });
 });

 describe('#recordBonusRoll', function() {
   it('takes bonusRoll as an argument and adds\
   it to bonus roll array', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     var bonusRoll = new Roll(7,1,1);
     frame.recordBonusRoll(bonusRoll);
     expect(frame.bonusRolls).toEqual([bonusRoll]);
   });

   it('throws an error if not awaiting bonus', function() {
     var rollFirst = new Roll(2,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,1);
     frame.recordRoll(rollSecond);
     var bonusRoll = new Roll(5,2,1);
     expect(function(){frame.recordBonusRoll(bonusRoll);}).toThrow(
       new Error ('frame is not awaiting any bonus roll')
     );
   });
 });

 describe('#isAwaitingBonus', function() {
   it('returns true if Strike and zero bonus rolls', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     expect(frame.isAwaitingBonus()).toBe(true);
   });

   it('returns true if Strike and one bonus rolls', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     var bonusRoll = new Roll(5,2,1);
     frame.recordBonusRoll(bonusRoll);
     expect(frame.isAwaitingBonus()).toBe(true);
   });

   it('returns false if Strike and two bonus rolls', function() {
     var rollFirst = new Roll(10,1,1);
     frame.recordRoll(rollFirst);
     var bonusRollFirst = new Roll(5,2,1);
     frame.recordBonusRoll(bonusRollFirst);
     var bonusRollSecond = new Roll(6,2,1);
     frame.recordBonusRoll(bonusRollSecond);
     expect(frame.isAwaitingBonus()).toBe(false);
   });

   it('returns true if Spare and zero bonus rolls', function() {
     var rollFirst = new Roll(7,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isAwaitingBonus()).toBe(true);
   });

   it('returns true if Spare and zero bonus rolls', function() {
     var rollFirst = new Roll(7,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     var bonusRollFirst = new Roll(6,2,1);
     frame.recordBonusRoll(bonusRollFirst);
     expect(frame.isAwaitingBonus()).toBe(false);
   });

   it('returns false if not a Strike and not a Spare', function() {
     var rollFirst = new Roll(2,1,1);
     frame.recordRoll(rollFirst);
     var rollSecond = new Roll(3,1,2);
     frame.recordRoll(rollSecond);
     expect(frame.isAwaitingBonus()).toBe(false);
   });
 });

  describe('#totalScore', function() {
    it('returns total score of the frame', function() {
      var rollFirst = new Roll(7,1,1);
      frame.recordRoll(rollFirst);
      var rollSecond = new Roll(3,1,2);
      frame.recordRoll(rollSecond);
      var bonusRollFirst = new Roll(6,2,1);
      frame.recordBonusRoll(bonusRollFirst);
      expect(frame.totalScore()).toEqual(16);
    });
  });

  describe('#canRoll', function() {
    it('returns true if roll length < 2 and not Strike', function() {
      var rollFirst = new Roll(7,1,1);
      frame.recordRoll(rollFirst);
      expect(frame.canRoll()).toBe(true);
    });

    it('returns false if roll length === 2', function() {
      var rollFirst = new Roll(7,1,1);
      frame.recordRoll(rollFirst);
      var rollSecond = new Roll(3,1,2);
      frame.recordRoll(rollSecond);
      expect(frame.canRoll()).toBe(false);
    });

    it('returns false if Strike', function() {
      var rollFirst = new Roll(10,1,1);
      frame.recordRoll(rollFirst);
      expect(frame.canRoll()).toBe(false);
    });
  });
});
