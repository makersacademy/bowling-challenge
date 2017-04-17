'use strict';

describe ('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });


  describe('intialize', function(){
    it('score starts at zero', function(){
      expect(bowling.getTotal()).toEqual(0);
    });

    it('isFrameComplete returns false', function(){
      expect(bowling.isFrameComplete).toBeFalsy();
    });
  });

  describe('frame', function(){
    it('begins on Frame #1', function(){
      expect(bowling.getFrame()).toEqual(1);
    });
  });

  describe('roll', function(){
    it('begins on Roll #1', function(){
      expect(bowling.getRoll()).toEqual(1);
    });
  });

  describe('bowl', function(){
    it('increments roll by 1', function(){
      bowling.bowl(6);
      expect(bowling.getRoll()).toEqual(2);
    });

    it('getFrameScore returns the number of pins knocked down in a frame', function(){
      bowling.bowl(4);
      expect(bowling.getFrameScore()).toEqual(4);
    });

    it('resets roll to 1 if frame is complete after bowl', function(){
      bowling.bowl(4);
      bowling.bowl(2);
      expect(bowling.getRoll()).toEqual(1);
    });

    it('frameScore is added to Total when frame is completed', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      bowling.bowl(6);
      expect(bowling.getTotal()).toEqual(7);
    });

    it('frameScore is reset to zero when frame is completed', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      bowling.bowl(6);
      expect(bowling.getFrameScore()).toEqual(6);
    });

    xit('only accepts knocked pins amount between 0 and 10', function(){
      expect(bowling.bowl(14)).toThrowError("Nope, try again");
    });

    xit('only hits maximum of 10 pins per pin-set', function(){
      bowling.bowl(9);
      expect(bowling.bowl(4)).toThrowError("Impossible! There were only 10 pins to knock down");
    });

    xit('cannot bowl if all 10 frames have been played', function(){
      for (var i = 1; i < 10; i++) {
        bowling.bowl(4);
        bowling.bowl(5);
      }
      expect(bowling.bowl(4)).toThrowError("Game over! Start a fresh game.")
    });
  });

  describe('frame complete', function(){
    it('is initially false', function(){
      expect(bowling.isFrameComplete).toBeFalsy();
    });

    it('isFrameComplete is true after 2 bowls', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      expect(bowling.isFrameComplete).toBeTruthy();
    });

    it('isFrameComplete is false after 3 bowls', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      bowling.bowl(7);
      expect(bowling.isFrameComplete).toBeFalsy();
    });

    it('frame is incremented when a frame is completed', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      expect(bowling.getFrame()).toEqual(2)
    });
  });

  describe('resetPinsIfAppropriate', function(){
    it('allows a third bowl on 10th Frame if preceded by two strikes or a spare', function(){
      for (var i = 1; i < 10; i++) {
        bowling.bowl(4);
        bowling.bowl(5);
      }
      bowling.bowl(4);
      bowling.bowl(6);
      expect(bowling.bowl(4)).not.toThrow();
    });
  });


});
