'use strict';

describe('Frame', function() {
  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame;
    game = jasmine.createSpyObj('game', ['addFrame' ]);
    // game = jasmine.createSpy('game');
  });

  describe('At the start of each frame', function() {

    // it('has a default score of zero', function() {
    //   expect(frame.getFrameScore()).toEqual(0);
    // });

    it('has a roll count of zero', function() {
      expect(frame.getRollCount()).toEqual(0);
    });

    it('has a starting pin count of 10', function() {
      expect(frame.getPinCount()).toEqual(10);
    });

    it('has a bonus score of zero', function() {
      expect(frame.getBonusScore()).toEqual(0);
    });
  });

  describe('Rolls', function() {

    it('can add the pins knocked down to the roll score', function() {
      frame.roll(2);
      expect(frame.rolls).toEqual([2]);
    });

    it('knows how many rolls there have been', function() {
      frame.roll(2);
      // frame.roll(2);
      expect(frame.getRollCount()).toEqual(1);
    });

    it('rejects a number of 10 or more for each roll', function() {
      expect(function() { frame.roll(11); }).toThrowError("Cannot bowl more than number of pins left standing");
    });

    it('rejects a roll number which is greater than the pins left standing', function() {
      frame.roll(2);
      expect(function() { frame.roll(9); }).toThrowError("Cannot bowl more than number of pins left standing");
    });

    it('does not reject a roll number which is lower than the pins left standing', function() {
      frame.roll(2);
      expect(function() { frame.roll(7); }).not.toThrowError("Cannot bowl more than number of pins left standing");
    });
  });

  describe('Strike and Spare', function() {

    it('knows when the frame is neither a strike nor a spare', function() {
      frame.roll(2);
      expect(frame.isStrike()).toBeFalsy();
      expect(frame.isSpare()).toBeFalsy();
    });

    describe('Strike', function() {
      it('knows when the frame is a strike', function() {
        frame.roll(frame.DEFAULT_PIN_COUNT);
        expect(frame.isStrike()).toBeTruthy();
      });
    });

    describe('Spare', function() {

      beforeEach(function() {
        var remaining;
        remaining = (frame.DEFAULT_PIN_COUNT - 2);
        frame.roll(2);
        frame.roll(remaining);
      });

      it('knows when the frame is a spare', function() {
        expect(frame.isSpare()).toBeTruthy();
      });
    });
  });

  // describe('Framescore', function() {
  //
  //   it('can add the roll score to the frame score for the first roll', function() {
  //     frame.roll(2);
  //     expect(frame.getFrameScore()).toEqual(2);
  //   });
  //
  //   it('can add the roll score to the frame score for the second roll', function() {
  //     frame.roll(2);
  //     frame.roll(2);
  //     expect(frame.getFrameScore()).toEqual(4);
  //   });
  // });

  describe('When a frame is complete', function() {
    it('knows a normal frame is complete after two rolls', function() {
      frame.roll(2);
      frame.roll(2);
      expect(frame.isComplete()).toBeTruthy();
    });
  });

  describe("'addFrameToGame'", function() {
    it('could add a frame to the game', function() {
     frame.addFrameToGame(game);
     expect(game.addFrame).toHaveBeenCalledWith(frame);
    });
  });

});
