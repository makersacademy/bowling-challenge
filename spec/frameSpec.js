'use strict';

describe ('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Should allow rolls and return the number of pins knocked', function() {
    it('Receives single roll and returns correct number of pins knocked', function() {
      var pins = Math.floor(Math.random() * 11);
      frame.roll(pins);
      expect(frame.getScore()).toEqual(pins);
    });

    it('Receives two rolls and returns total number of pins knocked', function() {
      var roll1score = Math.floor(Math.random() * 10);
      frame.roll(roll1score);
      var roll2score = Math.floor(Math.random() * 11 - roll1score);
      frame.roll(roll2score);
      expect(frame.getScore()).toEqual(roll1score + roll2score);
    });
  });

  describe('Should throw', function() {
    it('When given wrong number of pins', function() {
      expect(function() {frame.roll(11)}).toThrow();
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

  describe('Should handle strikes and spares', function() {
    it('Has no strikes and spares at the beginning', function(){
      expect(frame.needsBonus()).toEqual(false);
    });

    it('Has strike if 10 pins knocked by first roll', function(){
      frame.roll(10);
      expect(frame.needsBonus()).toEqual(true);
    });

    it('Has spare if 10 pins knocked by two rolls', function(){
      frame.roll(3);
      expect(frame.needsBonus()).toEqual(false);
      frame.roll(7);
      expect(frame.needsBonus()).toEqual(true);
    });
  });

  describe('Should handle strike and spare bonus points', function(){
    it('Requires two bonus point top-ups after strike', function(){
      frame.roll(10);
      frame.addBonus(5);
      expect(frame.needsBonus()).toEqual(true);
      frame.addBonus(3);
      expect(frame.needsBonus()).toEqual(false);
    });

    it('Requires one bonus point top-up after spare', function(){
      frame.roll(3);
      frame.roll(7);
      expect(frame.needsBonus()).toEqual(true);
      frame.addBonus(3);
      expect(frame.needsBonus()).toEqual(false);
    });
  });
});
