'use strict';

describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('getFirstRoll method', function(){

    it('should return 5', function(){
      bowling.addScore(5);
      expect(bowling.getFirstRoll()).toEqual(5);
    });

    it('should return 4', function(){
      bowling.addScore(4);
      bowling.addScore(5);
      expect(bowling.getFirstRoll()).toEqual(4);
    });

  });

  describe('addScore to scorecard method', function(){

    it('should add the number of pins knocked to the current frame', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      expect(bowling.scorecard).toContain([5,5]);
    });

    it('should return Invalid Roll', function(){
      bowling.addScore(5);
      bowling.addScore(6);
      expect(bowling.scorecard).toContain([5]);
      expect(bowling.addScore(6)).toEqual("Invalid Roll - can not hit more than 10 pins!");
    });

  });

  describe('isRollValid method', function(){

    it('should return Invalid Roll', function(){
      bowling.addScore(5);
      expect(bowling.isRollValid(6)).toEqual("Invalid Roll - can not hit more than 10 pins!");
    });

    it('should return 4', function(){
      bowling.addScore(5);
      expect(bowling.isRollValid(4)).toEqual(4);
    });

  });

  describe('A spare on current frame or last frame', function(){

    it('should return true if the current frame is a spare', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      expect(bowling.isSpare()).toBeTruthy();
    });

    it('should return false if the current frame is not a spare', function(){
      bowling.addScore(5);
      bowling.addScore(4);
      expect(bowling.isSpare()).toBeFalsy();
    });

    it('should return return true if the last frame was a spare', function(){
      bowling.addScore(5);
      bowling.addScore(5);
      bowling.addScore(4);
      expect(bowling.isPrevSpare()).toBeTruthy();
    });

    it('should return false if the last frame was not a spare', function(){
      bowling.addScore(5);
      bowling.addScore(4);
      bowling.addScore(2);
      expect(bowling.isPrevSpare()).toBeFalsy();
    });

    it('should return false if there has not been enough frames played', function(){
      bowling.addScore(4);
      bowling.addScore(5);
      expect(bowling.isPrevSpare()).toBeFalsy();
    });

  });

  describe('Whether current frame is a strike, last was a strike or on a double strike', function(){

    describe('a strike was thrown last', function(){

      beforeEach(function(){
        bowling.addScore(10);
        bowling.addScore(0);
      });

      it('should return true if the last frame was a strike', function(){
        expect(bowling.isStrike()).toBeTruthy();
      });

      it('should return true if the frame before last was a strike', function(){
        bowling.addScore(2);
        expect(bowling.isPrevStrike()).toBeTruthy();
      });

      it('should return true if player is on a double strike', function(){
        bowling.addScore(10);
        bowling.addScore(0);
        bowling.addScore(2);
        expect(bowling.isDoubleStrike()).toBeTruthy();
      });

      it('should return false if player is not on double strike', function(){
        bowling.addScore(4);
        bowling.addScore(6);
        bowling.addScore(4);
        expect(bowling.isDoubleStrike()).toBeFalsy();
      });

      it('should return false if there is not enough frames to determine double strike', function(){
        bowling.addScore(4);
        expect(bowling.isDoubleStrike()).toBeFalsy();
      });

    });

    it('should return false if the current frame is not a strike', function(){
      bowling.addScore(9);
      bowling.addScore(1);
      expect(bowling.isStrike()).toBeFalsy();
    });

    it('should return false if the last frame was not a strike', function(){
      bowling.addScore(7);
      bowling.addScore(0);
      bowling.addScore(10);
      expect(bowling.isPrevStrike()).toBeFalsy();
    });

    it('should return false if there are not enough frames to determing previous was a strike', function(){
      bowling.addScore(1);
      bowling.addScore(8);
      expect(bowling.isPrevStrike()).toBeFalsy();
    });

  });

  describe('Updating the total score', function(){

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
        bowling.updateTotal();
      });

      it('should return total of 0, awaiting next frame', function(){
        expect(bowling.total).toEqual(0);
      });

      it('should return total of 24 (10+5)+(5+4)', function(){
        bowling.addScore(5);
        bowling.addScore(4);
        bowling.updateTotal();
        expect(bowling.total).toEqual(24);
      });

      it('should return a total of 20 (10+10), awaiting next frame', function(){
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
        bowling.updateTotal();
      });

      it('should return total of 0, awaiting the next two rolls', function(){
        expect(bowling.total).toEqual(0);
      });

      it('should return a total of 28 (10+5+4)+(5+4)', function(){
        bowling.addScore(5);
        bowling.addScore(4);
        bowling.updateTotal();
        expect(bowling.total).toEqual(28);
      });

      it('should return a total of 20 (10+5+5), awaiting for the next frame', function(){
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.updateTotal();
        expect(bowling.total).toEqual(20);
      });

      describe('and the frame before also a strike', function(){

        beforeEach(function(){
          bowling.addScore(10);
          bowling.addScore(0);
          bowling.updateTotal();
        });

        it('should return 0, awaiting the next frame', function(){
          expect(bowling.total).toEqual(0);
        });

        it('should return 52 (10+10+4)+(10+4+5)+(9+4)', function(){
          bowling.addScore(4);
          bowling.addScore(5);
          bowling.updateTotal();
          expect(bowling.total).toEqual(52);
        });

        it('should return 46 (10+10+6)+(10+6+4), awaiting for next roll', function(){
          bowling.addScore(6);
          bowling.addScore(4);
          bowling.updateTotal();
          expect(bowling.total).toEqual(46);
        });

        it('should return 30 (turkey), awaiting next two frames', function(){
          bowling.addScore(10);
          bowling.addScore(0);
          bowling.updateTotal();
          expect(bowling.total).toEqual(30);
        });

      });

    });

  });

  describe('test if this is the tenth frame', function(){

    it('should return false', function(){
      bowling.addScore(4);
      expect(bowling.isTenthFrame()).toBeFalsy();
    });

    it('should return true', function(){
      for(var i = 0; i < 19; i++){
        bowling.addScore(4);
      };
      expect(bowling.isTenthFrame()).toBeTruthy();
    });

  });

  describe('updating the points on the last frame of the game', function(){

    describe('no strike on frames 8 or 9 and no spare on 9', function(){

      beforeEach(function(){
        for(var i = 0; i < 9; i++){
          bowling.addScore(4);
          bowling.addScore(4);
          bowling.updateTotal();
        };
      });

      it('should return 80', function(){
        bowling.addScore(4);
        bowling.addScore(4);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(80);
      });

      it('should return 86', function(){
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.tenthFrameUpdate();
        bowling.addScore(4);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(86);
      });

      it('should return 102', function(){
        bowling.addScore(10);
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(102);
      });

    });

    describe('a spare on the ninth frame', function(){

      beforeEach(function(){
        for(var i = 0; i < 8; i++){
          bowling.addScore(0);
          bowling.addScore(0);
        };
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.updateTotal();
      });

      it('should return 22', function(){
        bowling.addScore(4);
        bowling.addScore(4);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(22);
      });

      it('should return 30', function(){
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.tenthFrameUpdate();
        bowling.addScore(5);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(30);
      });

    });

    describe('a strike on the ninth frame', function(){

      beforeEach(function(){
        for(var i = 0; i < 8; i++){
          bowling.addScore(0);
          bowling.addScore(0);
        };
        bowling.addScore(10);
        bowling.addScore(0);
        bowling.updateTotal();
      });

      it('should return 26', function(){
        bowling.addScore(4);
        bowling.addScore(4);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(26);
      });

      it('should return 60', function(){
        bowling.addScore(10);
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(60);
      });

    });

    describe('a strike on 8th and 9th frame', function(){

      beforeEach(function(){
        for(var i = 0; i < 7; i++){
          bowling.addScore(0);
          bowling.addScore(0);
          bowling.updateTotal();
        };
        for(var i = 0; i < 2; i++){
          bowling.addScore(10);
          bowling.addScore(0);
          bowling.updateTotal();
        };

      });

      it('should return 50', function(){
         bowling.addScore(4);
         bowling.addScore(4);
         bowling.tenthFrameUpdate();
         expect(bowling.total).toEqual(50);
      });

      it('should return 55', function(){
        bowling.addScore(5);
        bowling.addScore(5);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(55);
      });

      it('should return 90', function(){
        bowling.addScore(10);
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        bowling.addScore(10);
        bowling.tenthFrameUpdate();
        expect(bowling.total).toEqual(90);
      });

    });

  });

});
