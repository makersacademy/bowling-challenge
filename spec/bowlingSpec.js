'use strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it ("keeps score", function() {
    expect(bowling.getScore()).toEqual(0);
  });
  
  describe ("Pins", function() {
    it ("returns the amount of pins left", function() {
      expect(bowling.getPins()).toEqual(10);
      var result = bowling.play();
      expect(bowling.getPins()).toEqual(10 - result);
  });
  });

  describe ("Knocking down pins (playing)", function() {
    it ("can play and returns the number of pins knocked down", function() {
      var result = bowling.play();
      expect(result).toEqual(jasmine.any(Number));
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(11);
    });
    it ("second roll, cannot knock more pins than what was left", function() {
      bowling._roll = function() { return 9; };
      bowling.play();
      bowling._roll = Bowling.prototype._roll;
      var result = bowling.play();
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(2);
    });
  });
  
  describe ("Frame", function() {
    it ("can get the current frame scores", function() {
      var scores = {roll1: null, roll2: null};
      expect(bowling.getCurrentFrame()).toEqual(scores);
    });
  });

  describe ("Frame number", function() {
    it ("can get the current frame number", function() {
      expect(bowling.getCurrentFrameNumber()).toEqual(1); 
    });
    it ("increases the frame number after a couple of plays", function() {
      bowling._roll = function() { return 1; };
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(1);
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(2);
    });
  });

  describe ("Keeping Score", function() {
    
    it ("adds the points to the score", function() {
      var points = bowling.play();
      expect(bowling.getScore()).toEqual(points);
    });

  });
  
});
