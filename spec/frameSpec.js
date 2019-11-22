'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('new frame', function(){

    it('has empty array', function(){
      expect(frame.rolls).toBeInstanceOf(Array);
    });

    it('has default MAX ROLLS 2', function(){
      expect(frame.MAX_ROLLS).toEqual(2);
    });

    it('doesnt allow three rolls', function(){
      frame.addRoll(0);
      frame.addRoll(0);
      expect(function(){ frame.addRoll(1)} ).toThrow("Frame Over");
    });
  });

  describe('adding pins on roll', function(){

    beforeEach(function(){
      frame.addRoll(0);
    });

    it('has one 0 on gutter roll', function(){
      expect(frame.rolls[0]).toEqual(0);
    });

    it('has two 0 on gutter roll frame', function(){
      frame.addRoll(0);
      expect(frame.rolls[0]).toEqual(0);
      expect(frame.rolls[1]).toEqual(0);
      expect(frame.getFrameScore()).toEqual(0);
    });

    it('has 0 1 when rolled 0 and 1', function(){
      frame.addRoll(1);
      expect(frame.rolls[0]).toEqual(0);
      expect(frame.rolls[1]).toEqual(1);
      expect(frame.getFrameScore()).toEqual(1);
    });

  });
});