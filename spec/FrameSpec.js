'use strict';

describe('Frame', function() {
  var frame;
  var frame2;
  var game;

  beforeEach(function() {
    frame = new Frame();
    frame2 = new Frame();
    game = jasmine.createSpyObj('game', ['getFrame', 'getFrames', 'calculateGameScore']);
  })

  it('has first roll', function() {
    frame.roll(2);
    expect(frame.calculatePins()).toEqual(2);
  })

  describe('calculatePins', function() {
    it('returns total of roll scores', function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.calculatePins()).toEqual(5);
    })
  })

  describe('hasSpare', function() {
    it('can have a spare', function() {
      frame.roll(2);
      frame.roll(8);
      expect(frame.hasSpare()).toEqual(true);
    })
  })

  describe('hasStrike', function() {
    it('can have a strike', function() {
      frame.roll(10);
      expect(frame.hasStrike()).toEqual(true);
    })
  })


})
