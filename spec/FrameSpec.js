'use strict';

describe("Frames in Bowling", function(){
  var frame;
  var nextFrame;
  var afterNextFrame;

  it("calculates the total for a single frame of two rolls", function(){
    var frame = new Frame([5,3]);
    expect(frame.total()).toEqual(8);
  });

  it("calculates the total for last frame", function(){
    var frame = new Frame([5,1]);
    var nextFrame = new Frame([3,3]);
    expect(frame.total(nextFrame)).toEqual(6);
  });

  describe("when the previous frame was a spare", function(){
    it("calculates the total for the last frame, applying the spare bonus", function(){
      var frame = new Frame([8,2]);
      var nextFrame = new Frame([5,3]);
      expect(frame.total(nextFrame)).toEqual(15);
    });
  });

  describe("when the previous frame was a strike", function(){
    it("calculates the total for the next frame, applying the strike bonus", function(){
      var frame = new Frame([10]);
      var nextFrame = new Frame([5,2]);
      expect(frame.total(nextFrame)).toEqual(17);
    });
  });

  it("calculates the total for two strikes in a row", function(){
    var frame = new Frame([10]);
    var nextFrame = new Frame([10]);
    var afterNextFrame = new Frame([5, 2]);
    expect(frame.total(nextFrame, afterNextFrame)).toEqual(25);
  });

  it("calculates the total for three strikes in a row", function(){
    var frame = new Frame([10]);
    var nextFrame = new Frame([10]);
    var afterNextFrame = new Frame([10]);
    expect(frame.total(nextFrame, afterNextFrame)).toEqual(30);
  });

  it ("calculates three strikes in the final frame", function(){
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  it ("doesn't apply a previous strike bonus to the final frame", function(){
    var frame = new Frame([10]);
    var nextFrame = new Frame([10,10,10]);
    expect(frame.total(nextFrame)).toEqual(30);
  });
});