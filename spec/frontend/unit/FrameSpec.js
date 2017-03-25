'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('new', function(){

    it('should create an instance of Frame', function(){
      expect(frame instanceof Frame).toBe(true);
    });

  });

  describe('#calculateFrameScore', function(){

    it('should be zero to begin with', function(){
      expect(frame.calculateFrameScore()).toEqual(0);
    });

    it('calculates score for a frame', function(){
      frame.play(4);
      frame.play(1);
      expect(frame.calculateFrameScore()).toEqual(5);
    });

  });

  describe('#getRolls', function(){

    it('should contain atleast two instances of Roll', function(){
      expect(frame.getRolls().length).toEqual(2);
      expect(frame.getRolls().every(roll => roll instanceof Roll)).toBe(true);
    });

  });

  describe('#play', function(){

    it("sets current roll's knocked pins", function(){
        expect(function(){frame.play(4)}).not.toThrow();
    });

  });

  describe('#isDone', function(){
    it('returns true when both rolls set', function(){
      frame.play(4);
      frame.play(6);
      expect(frame.isDone()).toBe(true);
    });

    it('returns false when atleast one not set', function(){
      frame.play(4);
      expect(frame.isDone()).toBe(false);
    });
  });

  describe('#isSpare', function(){
    it('returns true when frameScore is 10', function(){
      frame.play(4);
      frame.play(6);
      expect(frame.isSpare()).toBe(true);
    });

    it('returns true when frameScore is 10', function () {
      frame.play(0);
      frame.play(10);
      expect(frame.isSpare()).toBe(true);
    });

    it('returns false when frameScore is less than 10', function(){
      frame.play(4);
      frame.play(1);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('#hasStrike', function(){
    it('returns true when there is a strike in first roll', function () {
      frame.play(10);
      expect(frame.hasStrike()).toBe(true);
    });

    it('returns a false when there are no strikes', function () {
      frame.play(5);
      frame.play(5);
      expect(frame.hasStrike()).toBe(false);
    });
  });

});
