(function() {
  'use strict'
}());

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('New frame', function() {
    it('Frame should have 10 pins at start', function() {
      expect(frame.pins).toEqual(10)
    });

    it('strike is false', function() {
      expect(frame.strike).toEqual(false)
    });

    it('spare is false', function(){
      expect(frame.spare).toEqual(false)
    });

    it('score is zero', function(){
      expect(frame.frameScore).toEqual([])
    });

  });

  describe('Playing frame', function() {
    it('first roll is registered', function(){
      frame.rollOne(6);
      expect(frame.frameScore).toEqual([6])
    });

    it('second roll is registered', function(){
      frame.rollOne(6);
      frame.rollTwo(2);
      expect(frame.frameScore).toEqual([6,2])
    });

    it('pins left after first roll', function() {
      frame.rollOne(6);
      expect(frame.pins).toEqual(4)
    });

    it('pins left after second roll', function() {
      frame.rollOne(6);
      frame.rollTwo(2);
      expect(frame.pins).toEqual(2)
    });

    it('registers a strike', function(){
      frame.rollOne(10);
      expect(frame.strike).toEqual(true)
    });

    it('registers a spare', function() {
      frame.rollOne(6);
      frame.rollTwo(4);
      expect(frame.spare).toEqual(true)
    });
  });

  describe('Scoring', function(){
    it('frame score', function(){
      frame.rollOne(6);
      frame.rollTwo(2);
      frame.frameTotal(frame.frameScore).toEqual(8)
    });
  });



});
