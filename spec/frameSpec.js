'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('Bowl', function() {
    it('adds score to first bowl on first go',  function(){
      frame.bowl(5);
      expect(frame.firstBowl()).toEqual(5);
    });

    it('adds score to second bowl on second go', function(){
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.secondBowl()).toEqual(2);
    });
  });

  describe('Score', function() {
    it('gutter ball situation', function() {
      frame.bowl(0);
      frame.bowl(0);
      expect(frame.getScore()).toEqual(0);
    });

    it('normal bowls situation', function() {
      frame.bowl(4);
      frame.bowl(3);
      expect(frame.getScore()).toEqual(7);
    });

    it('spare situation', function() {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.getScore()).toEqual(10);
    });

    it('strike situation', function(){
      frame.bowl(10);
      expect(frame.getScore()).toEqual(10);
    });
  });

  describe('Complete', function() {
    it('starts off incomplete', function(){
      expect(frame.isComplete()).toEqual(false);
    });

    it('is true when 2 bowls have happened', function() {
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.isComplete()).toEqual(true);
    });

    it('is true when there is a strike', function() {
      frame.bowl(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('Strike', function() {
    it('knows when it is a strike', function(){
      frame.bowl(10);
      expect(frame.isAStrike()).toEqual(true);
    });

    it('knows when it is not a strike', function(){
      expect(frame.isAStrike()).toEqual(false);
      frame.bowl(5);
      expect(frame.isAStrike()).toEqual(false);
    });
  });

  describe('Spare', function() {
    it('knows when it is a spare', function(){
      frame.bowl(6);
      frame.bowl(4);
      expect(frame.isASpare()).toEqual(true);
    });

    it('knows when it is not a spare', function(){
      expect(frame.isASpare()).toEqual(false);
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.isASpare()).toEqual(false);
    });

    it('knows it is not a spare when strike bowled', function(){
      frame.bowl(10);
      expect(frame.isASpare()).toEqual(false);
    });
  });
});
