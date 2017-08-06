'use strict';

describe ('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame(2);
  });

  describe('Should allow rolls and return the number of pins knocked', function() {
    it('Receives single roll and returns correct number of pins knocked', function() {
      var pins = Math.floor(Math.random() * 11);
      frame.roll(pins);
      expect(frame.getScore()).toEqual(pins);
    });

    it('Receives two rolls and returns correct number of pins knocked', function() {
      var pins1 = Math.floor(Math.random() * 10);
      frame.roll(pins1);
      var pins2 = Math.floor(Math.random() * 11 - pins1);
      frame.roll(pins2);
      expect(frame.getScore()).toEqual(pins1 + pins2);
    });
  });

  describe('Should handle completion', function() {
    it('Not complete at the beginning', function() {
      expect(frame.isComplete()).toEqual(false);
    });

    it('Not complete after a non-strike roll', function() {
      var pins = Math.floor(Math.random() * 10);
      frame.roll(pins);
      expect(frame.isComplete()).toEqual(false);
    });

    it('Complete after two rolls', function() {
      frame.roll(3);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });

    it('Complete after strike', function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('10th frame', function() {
    beforeEach(function(){
      frame = new Frame(3);
    });

    it('Complete after 3 rolls', function(){
      frame.roll(2);
      frame.roll(3);
      expect(frame.isComplete()).toEqual(false);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('Should handle strikes and spares', function() {
    it('Has no strikes and spares at the beginning', function(){
      expect(frame.hasStrike()).toEqual(false);
      expect(frame.hasSpare()).toEqual(false);
    });

    it('Has strike if 10 pins knocked by first roll', function(){
      frame.roll(10);
      expect(frame.hasStrike()).toEqual(true);
      expect(frame.hasSpare()).toEqual(false);
    });

    it('Has spare if 10 pins knocked by two rolls', function(){
      frame.roll(3);
      expect(frame.hasSpare()).toEqual(false);
      frame.roll(7);
      expect(frame.hasSpare()).toEqual(true);
    });
  });
});
