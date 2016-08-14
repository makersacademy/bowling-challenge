'use strict';

describe('Frame', function() {
  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame(1);
    game = jasmine.createSpyObj('game', ['addFrame' ]);
  });


  describe('At the start of each frame', function() {

    it('has a default score of zero', function() {
      expect(frame.getFrameScore()).toEqual(0);
    });

    it('has a roll count of zero', function() {
      expect(frame.getRollCounter()).toEqual(0);
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
      expect(frame.rollScore).toEqual(2);
    });

    it('knows how many rolls there have been', function() {
      frame.roll(2);
      frame.roll(2);
      expect(frame.getRollCounter()).toEqual(2);
    });



  });

  describe('Strike and Spare', function() {

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

  describe('Framescore', function() {

    it('can add the roll score to the frame score for the first roll', function() {
      frame.roll(2);
      expect(frame.getFrameScore()).toEqual(2);
    });

    it('can add the roll score to the frame score for the second roll', function() {
      frame.roll(2);
      frame.roll(2);
      expect(frame.getFrameScore()).toEqual(4);
    });
  });

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
