'use strict';

describe("Frame", function(){
  var frame;


  beforeEach(function(){
    frame = new Frame();
  });

    it("returns the score for the first frame", function(){
      expect(frame.getFirstRoll()).toEqual(0)
    });

    it("returns the score for the second frame", function(){
      expect(frame.getSecondRoll()).toEqual(0)
    });

    it("returns the total score of two frames", function(){
      expect(frame.getFrameScore()).toEqual(frame.getFirstRoll() + frame.getSecondRoll())
    });
  });
