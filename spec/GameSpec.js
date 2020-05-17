'use strict';

describe('Game', function() {
  var game;
  var frame;
  var frame2;
  var frame3;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['getRolls', 'pins', 'isSpare', 'isStrike']);
    frame2 = jasmine.createSpyObj('frame', ['getRolls', 'pins', 'isSpare', 'isStrike']);
    frame3 = jasmine.createSpyObj('frame', ['getRolls', 'pins', 'isSpare', 'isStrike']);
  })
  it('stores frames in the game', function() {
    expect(game.getFrames()).toEqual([]);
  })
  describe('#getFrame', function() {
    it('gets a new frame', function() {
      game.getFrame(frame);
      expect(game.getFrames()).toEqual([frame]);
    })
  })
  describe('#calculatePins', function() {
    it('calculates all pins knocked down in the game', function() {
      frame.pins.and.returnValue(9);
      frame2.pins.and.returnValue(13);
      game.getFrame(frame);
      game.getFrame(frame2);
      expect(game.calculatePins()).toEqual(22);
    })
  })
  describe('#calculateGameScore', function() {
    it('returns 0 when all rolls are 0 (gutter game)', function() {
      frame.pins.and.returnValue(0);
      frame.getRolls.and.returnValue([0, 0]);
      for (var i = 0; i < 10; i++) {
        game.frames[i] = frame;
      }
      expect(game.calculateGameScore()).toEqual(0);
    })
    it('returns 300 when all rolls are 10 (perfect game)', function() {
      frame.isStrike.and.returnValue(true);
      frame.pins.and.returnValue(10);
      frame.getRolls.and.returnValue([10]);
      frame2.isStrike.and.returnValue(true);
      frame2.pins.and.returnValue(30);
      frame2.getRolls.and.returnValue([10,10,10]);
      for (var i = 0; i < 9; i++) {
        game.frames[i] = frame;
      };
      game.frames[9] = frame2;
      expect(game.calculateGameScore()).toEqual(300);
    })
  })

  describe('#calculateBonus', function() {
    beforeEach(function() {
      frame.pins.and.returnValue(10);
      game.getFrame(frame);
    })
    it('calculates bonus for spares', function() {
      frame2.getRolls.and.returnValue([4,5]);
      frame2.pins.and.returnValue(9);
      frame.isSpare.and.returnValue(true);
      game.getFrame(frame2);

      expect(game.calculateBonus()).toEqual(4);
    })
    it('calculates bonus for strikes when next frame is not strike', function() {
      frame.isStrike.and.returnValue(true);
      frame2.getRolls.and.returnValue([4,5]);
      frame2.pins.and.returnValue(9);
      frame2.isStrike.and.returnValue(false);
      game.getFrame(frame2);
      expect(game.calculateBonus()).toEqual(9);
    })
    it('calculates bonus for strikes when next frame is strike', function() {
      frame.isStrike.and.returnValue(true);
      frame.pins.and.returnValue(10);
      frame2.pins.and.returnValue(10);
      frame2.isStrike.and.returnValue(true);
      frame3.pins.and.returnValue(9);
      frame3.getRolls.and.returnValue([4,5]);
      game.getFrame(frame2);
      game.getFrame(frame3);
      expect(game.calculateBonus()).toEqual(14);
    })
  })
})
