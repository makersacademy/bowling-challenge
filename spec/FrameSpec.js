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

  describe('#getFrameScore', function(){

    it('should be zero to begin with', function(){
      expect(frame.getFrameScore()).toEqual(0);
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

  describe('#calculateFrameScore', function(){
    it('calculates score for a frame', function(){
      frame.play(4);
      frame.play(1);
      expect(frame.calculateFrameScore()).toEqual(5);
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

    it('returns false when frameScore is less than 10', function(){
      frame.play(4);
      frame.play(1);
      expect(frame.isSpare()).toBe(false);
    });
  });

});
