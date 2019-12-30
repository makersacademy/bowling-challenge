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

    describe('no bonus points only regular frames thrown', function(){

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

      it('should return total of 0', function(){
        bowling.addScore(0);
        bowling.addScore(0);
        bowling.updateTotal();
        expect(bowling.total).toEqual(0);
      });

    });

    describe('the last frame being a spare', function(){

      beforeEach(function(){
        bowling.addScore(7);
        bowling.addScore(3);
      });

      it('should return total of 0, awaiting next frame', function(){
        bowling.updateTotal();
        expect(bowling.total).toEqual(0);
      });

      it('should return total of 24 (10+5)+(5+4)', function(){
        bowling.updateTotal();
        bowling.addScore(5);
        bowling.addScore(4);
        bowling.updateTotal();
        expect(bowling.total).toEqual(24);
      });

      it('should return a total of 20 (10+10), awaiting next frame', function(){
        bowling.updateTotal();
        bowling.addScore(10);
        bowling.addScore(0);
        bowling.updateTotal();
        expect(bowling.total).toEqual(20);
      });

    });

    describe('the last frame being a strike', function(){

      beforeEach(function(){
        bowling.addScore(10);
        bowling.addScore(0);
      });

      it('should return total of 0, awaiting the next two rolls', function(){
        bowling.updateTotal();
        expect(bowling.total).toEqual(0);
      });

      it('should return a total of 28 (10+5+4)+(5+4)', function(){
        bowling.updateTotal();
        bowling.addScore(5);
        bowling.addScore(4);
        bowling.updateTotal();
        expect(bowling.total).toEqual(28);
      });

      it('should return a total of 20 (10+5+5), awaiting for the next frame', function(){
        bowling.updateTotal();
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.updateTotal();
        expect(bowling.total).toEqual(20);
      });

      describe('and the frame before was also a strike', function(){

        it('should return 0, awaiting the next frame', function(){
          bowling.updateTotal();
          bowling.addScore(10);
          bowling.addScore(0);
          bowling.updateTotal();
          expect(bowling.total).toEqual(0)
        });

      });

    });

  });

});
