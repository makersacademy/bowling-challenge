'use strict';

describe('FinalFrame', function() {

  var finalframe;

  beforeEach(function() {
    finalframe = new FinalFrame;
  });

  describe('Bowl', function() {
    it('adds score to first bowl on first go',  function(){
      finalframe.bowl(5);
      expect(finalframe.firstBowl()).toEqual(5);
    });

    it('adds score to second bowl on second go', function(){
      finalframe.bowl(5);
      finalframe.bowl(2);
      expect(finalframe.secondBowl()).toEqual(2);
    });
  });

  describe('Valid Bowl', function() {
    it('is false if bowl amount is greater than 10', function() {
      expect(finalframe.isValidBowl(11)).toEqual(false);
    });

    it('is false if second bowl makes total greater than 10', function() {
      finalframe.bowl(5)
      expect(finalframe.isValidBowl(7)).toEqual(false);
    });
  });

  describe('Score', function() {
    it('gutter ball situation', function() {
      finalframe.bowl(0);
      finalframe.bowl(0);
      expect(finalframe.getScore()).toEqual(0);
    });

    it('normal bowls situation', function() {
      finalframe.bowl(4);
      finalframe.bowl(3);
      expect(finalframe.getScore()).toEqual(7);
    });

    it('spare situation', function() {
      finalframe.bowl(8);
      finalframe.bowl(2);
      finalframe.bowl(5);
      expect(finalframe.getScore()).toEqual(15);
    });

    it('strike situation', function(){
      finalframe.bowl(10);
      finalframe.bowl(10);
      finalframe.bowl(10);
      expect(finalframe.getScore()).toEqual(30);
    });
  });

  describe('Complete', function(){
    it('starts off incomplete', function(){
      expect(finalframe.isComplete()).toEqual(false);
    });

    it('is false after 1 bowl', function() {
      finalframe.bowl(5);
      expect(finalframe.isComplete()).toEqual(false);
    });

    it('is true when 2 under 10 bowls have happened', function() {
      finalframe.bowl(5);
      finalframe.bowl(2);
      expect(finalframe.isComplete()).toEqual(true);
    });

    it('is true after 3 turns when there is a strike or spare', function() {
      finalframe.bowl(10);
      finalframe.bowl(10);
      finalframe.bowl(10);
      expect(finalframe.isComplete()).toEqual(true);
    });
  });

  describe('Third Bowl Allowed', function(){
    it('starts off false', function() {
      expect(finalframe.isThirdBowlAllowed()).toEqual(false);
    });

    it('is false after 2 under 10 bowls', function() {
      finalframe.bowl(3);
      finalframe.bowl(4);
      expect(finalframe.isThirdBowlAllowed()).toEqual(false);
    });

    it('is true after a spare', function() {
      finalframe.bowl(8);
      finalframe.bowl(2);
      expect(finalframe.isThirdBowlAllowed()).toEqual(true);
    });

    it('is true after a strike', function() {
      finalframe.bowl(10);
      expect(finalframe.isThirdBowlAllowed()).toEqual(true);
    });
  });

});
