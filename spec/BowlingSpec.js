'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('Testing addScore card method', function(){

    it('should add the number of pins knocked to the current frame', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      expect(bowling.scorecard).toContain([5,5]);
    });

  });

  describe('Testing for a spare on current frame or last frame', function(){

    it('should return true if the last frame was a spare', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      expect(bowling.isSpare()).toBeTruthy();
    });

    it('should return false if the last frame was not a spare', function(){
      bowling.addScore(5);
      bowling.addScore(4);
      expect(bowling.isSpare()).toBeFalsy();
    });

    it('should return return true if the frame before last was a spare', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      bowling.addScore(4);
      expect(bowling.isPrevSpare()).toBeTruthy();
    });

    it('should return false if the frame before the last was not a spare', function(){
      bowling.addScore(5);
      bowling.addScore(4);
      bowling.addScore(2);
      expect(bowling.isPrevSpare()).toBeFalsy();
    });

    it('should return false if there has only been one frame played', function(){
      bowling.addScore(4);
      bowling.addScore(5);
      expect(bowling.isPrevSpare()).toBeFalsy();
    });

  });

  describe('Testing for whether current frame is a strike, last was a strike or on a double strike', function(){

    it('should return true if the last frame was a strike', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      expect(bowling.isStrike()).toBeTruthy();
    });

    it('should return false if the last frame was not a strike', function(){
      bowling.addScore(9);
      bowling.addScore(1);
      expect(bowling.isStrike()).toBeFalsy();
    });

    it('should return true if the frame before last was a strike', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.addScore(2);
      expect(bowling.isPrevStrike()).toBeTruthy();
    });

    it('should return false if the frame before last was not a strike', function(){
      bowling.addScore(7);
      bowling.addScore(0);
      bowling.addScore(10);
      expect(bowling.isPrevStrike()).toBeFalsy();
    });

    it('should return false if only one frame has been played', function(){
      bowling.addScore(1);
      bowling.addScore(8);
      expect(bowling.isPrevStrike()).toBeFalsy();
    });

    it('should return true if player is on double strike', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.addScore(2);
      expect(bowling.isDoubleStrike()).toBeTruthy();
    });

    it('should return false if player is not on double strike', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.addScore(4);
      bowling.addScore(6);
      bowling.addScore(4);
      expect(bowling.isDoubleStrike()).toBeFalsy();
    });

    it('should return false if there is not enough frames to determine double strike', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.addScore(4);
      expect(bowling.isDoubleStrike()).toBeFalsy();
    });

  });

  describe('Testing on updating the total score', function(){

    it('should return total as 9', function(){
      bowling.addScore(4);
      bowling.addScore(5);
      bowling.updateTotal();
      expect(bowling.total).toEqual(9);
    });

    it('should return total of 7', function(){
      bowling.addScore(7);
      bowling.addScore(0);
      bowling.updateTotal();
      expect(bowling.total).toEqual(7);
    });

    it('should return total of 0, if only a strike was scored as it is awaiting the next two rolls', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.updateTotal();
      expect(bowling.total).toEqual(0);
    });

    it('should return total of 0, if only a spare was scored as it is awaiting one additional roll', function(){
      bowling.addScore(7);
      bowling.addScore(3);
      bowling.updateTotal();
      expect(bowling.total).toEqual(0);
    });

    it('should return total of 24, after scoring a spare and a 5 on the next roll', function(){
      bowling.addScore(8);
      bowling.addScore(2);
      bowling.updateTotal();
      bowling.addScore(5);
      bowling.addScore(4);
      bowling.updateTotal();
      expect(bowling.total).toEqual(24);
    });

    it('should return a total of 20, after scroing a spare and a strike on the next roll and inputting 0 as the second roll', function(){
      bowling.addScore(8);
      bowling.addScore(2);
      bowling.updateTotal();
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.updateTotal();
      expect(bowling.total).toEqual(20);
    });

    it('should return a total of 28 after scoring a strike and a 1 then a 9', function(){
      bowling.addScore(10);
      bowling.addScore(0);
      bowling.updateTotal();
      bowling.addScore(5);
      bowling.addScore(4);
      bowling.updateTotal();
      expect(bowling.total).toEqual(28);
    });

  });

});
