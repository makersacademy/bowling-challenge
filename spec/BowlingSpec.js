'use strict';

describe('Bowling', function() {
  var bowling
  beforeEach(function() {
    bowling = new Bowling();
  });
  describe('without rolling any strikes or spares', function() {
    it('returns the total score of 10 frames of gutter rolls', function() {
      rollMany(0, 20);
      expect(bowling.totalScore()).toEqual(0)
    });
  });
  describe('Calculates the total with no bonus ', function() {
    it('returns the total score of all the rolls without bonuses', function() {
      rollMany(4, 20);
      expect(bowling.totalScore()).toEqual(80)
    });
  });

  describe('strikes', function(){
    it('calculates roll with one strike', function(){
      bowling.roll(10);
      rollMany(4, 18);
      expect(bowling.totalScore()).toEqual(90)
    });
  });

  describe('strikes', function(){
    it('calculates roll with two strikes', function(){
      bowling.roll(10);
      bowling.roll(10);
      rollMany(2, 16);
      expect(bowling.totalScore()).toEqual(68)
    });
  });

  describe('spares', function(){
    it('calculates roll with one spare', function(){
      bowling.roll(5);
      bowling.roll(5);
      rollMany(4, 18);
      expect(bowling.totalScore()).toEqual(86)
    });
  });

  describe('spares', function(){
    it('calculates roll with two spares', function(){
      bowling.roll(3);
      bowling.roll(7);
      bowling.roll(5);
      bowling.roll(5);
      rollMany(4, 16);
      expect(bowling.totalScore()).toEqual(93)
    });
  });

  describe('perfect game', function(){
    it('calculates a perfect game ', function(){
      rollMany(10, 20);
      expect(bowling.totalScore()).toEqual(300)
    });
  });

  function rollMany(pins,rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }


});