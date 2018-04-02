'use strict';

describe('Frame', function() {

  describe('normal scoring behaviour', function() {
    it('tallies a normal score', function() {
      var frame = new Frame();
      frame.roll(2);
      frame.roll(2);
      expect(frame.score()).toEqual(4);
    });
    it('allows only two rolls in normal circumstances', function(){
      var frame = new Frame();
      frame.roll(2);
      frame.roll(2);
      frame.roll(2);
      expect(frame.score()).toEqual(4);
    });
    it('is finished after two rolls', function(){
      var frame = new Frame();
      frame.roll(2);
      frame.roll(2);
      expect(frame.isFinished()).toEqual(true);
    });
  });

  describe('spares', function() {
    it('logs a spare', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    });
    it('allows a single bonus roll to be added if a spare is logged', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      frame.roll(5);
      expect(frame.score()).toEqual(15);
    });
    it('does not allow multiple bonus rolls to be added if a spare is logged', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      frame.roll(5);
      frame.roll(5);
      expect(frame.score()).toEqual(15);
    });
    it('knows it is fully finished when the bonus roll has been added', function(){
      var frame = new Frame();
      frame.roll(5);
      frame.roll(5);
      frame.roll(5);
      expect(frame.isFullyFinished()).toEqual(true);
    });
  });

  describe('strikes', function(){
    it('logs a strike', function(){
      var frame = new Frame();
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('is finished when a strike is logged', function(){
      var frame = new Frame();
      frame.roll(10);
      expect(frame.isFinished()).toEqual(true);
    });
    it('allows two bonus rolls', function(){
      var frame = new Frame();
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      expect(frame.score()).toEqual(30);
    });
    it('knows it is fully finished when two bonus rolls have been added', function(){
      var frame = new Frame();
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      expect(frame.isFullyFinished()).toEqual(true);
    });
  });

  describe('frame numbering', function(){
    it('allows a frame number to be set and returned', function(){
      var frame = new Frame();
      frame.nSet(5);
      expect(frame.n()).toEqual(5);
    });
  });

  describe('frame 10', function(){
    it('allows only two bonus rolls if the first roll is a strike, even if all subsequent are strikes', function(){
      var frame = new Frame();
      frame.nSet(10);
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      frame.roll(10);
      expect(frame.score()).toEqual(30);
    });
  });
});
