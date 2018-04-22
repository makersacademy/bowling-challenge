'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('first roll when there is no bonus', function() {
    it('push into rolls array', function() {
      frame.firstRoll(3);
      expect(frame._rolls[0]).toEqual(3);
    });

    it('add score', function() {
       frame.firstRoll(6);
      expect(frame._score).toEqual(6);
    });
  });

  describe('second roll when there is no bunus', function() {
    it('push into rolls array', function() {
      frame.firstRoll(3);
      frame.secondRoll(7);
      expect(frame._rolls[1]).toEqual(7);
    });

    it('add score', function() {
       frame.firstRoll(6);
       frame.secondRoll(2);
      expect(frame.finalScore()).toEqual(8);
    });
  });

  describe('bonus', function() {
    it('first roll double score when there is one bonus', function() {
      frame.addBonus(1);
      frame.firstRoll(4);
      frame.secondRoll(2);
      expect(frame.finalScore()).toEqual(10);
    });

    it('both rolls double score when there are two bonus', function() {
      frame.addBonus(2);
      frame.firstRoll(3);
      frame.secondRoll(6);
      expect(frame.finalScore()).toEqual(18);
    });
  });
});
