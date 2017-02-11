// Count and sum the scores of a bowling game for one player (in JavaScript).
// A bowling game consists of 10 frames in which the player tries to knock down
// the 10 pins. In every frame the player can roll one or two times.
// The actual number depends on strikes and spares. The score of a frame is the
// number of knocked down pins plus bonuses for strikes and spares.
// After every frame the 10 pins are reset.
// 'use strict';

describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function(){
    expect(frame).toBeDefined();
  });

  it("contains roll1 and roll2", function(){
    var _roll1;
    var _roll2
    expect(frame._roll1).toBeDefined();
    expect(frame._roll2).toBeDefined();
  });

  it("has a score", function(){
    var _score;
    expect(frame._score).toBeDefined();
  });

  it("has a bonus", function(){
    var _bonus;
    expect(frame._bonus).toBeDefined();
  });

  it("has a roll1 method", function(){
    expect(frame.roll1).toBeDefined();
  });

  it("has a roll2 method", function(){
    expect(frame.roll2).toBeDefined();
  });

  describe('#roll1', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });

    it ('returns a number of pins knocked down after the first roll', function() {
      frame.roll1();
      expect(typeof frame._roll1).toEqual('number');
    });
    it ('can knock down 0 - 10 pins', function() {
      frame.roll1();
      expect(frame._roll1).toBeLessThan(10);
    });
    it ('adds the number of pins knocked down to the frame score', function() {
      spyOn(frame, 'roll1').and.returnValue(5);
      expect(frame._score).toEqual(frame._score + frame._roll1);
    });
  });

  describe('#roll2', function() {
    var frame;
    beforeEach(function() {
      frame = new Frame();
    });

    it ('returns a number of pins knocked down after the second roll', function() {
      frame.roll2();
      expect(typeof frame._roll2).toEqual('number');
    });
    it ('can knock down 0 - 10 pins', function() {
      frame.roll2();
      expect(frame._roll2).toBeLessThan(10);
    });
  });



});
