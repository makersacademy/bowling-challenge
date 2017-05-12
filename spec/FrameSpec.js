"use strict";

describe("Frame", function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("initializes with ten pins", function() {
    expect(frame.remainingPins).toEqual(10);
  });

  it("knocks down random number of pins", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    expect(frame.remainingPins).toEqual(6);
  });

  it("stores number of pins knocked down in first bowl", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    expect(frame.currentFrame).toEqual([4]);
  });

  it("stores number of pins knocked down in second bowl", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    frame.bowl();
    expect(frame.currentFrame).toEqual([4, 4]);
  });

  it("completes the frame if first bowl knocks down ten pins", function() {
    spyOn(Math, 'floor').and.returnValue(10);
    frame.bowl();
    expect(frame.currentFrame).toEqual([10, 0]);
    });

  it("does not allow further bowling if frame is complete", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    frame.bowl();
    expect(function(){frame.bowl()}).toThrowError("Cannot bowl, frame is complete")
  });

  it("completes 12th frame if bowl is not a strike", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bonusBowl();
    expect(frame.currentFrame).toEqual([4,0])
  });
});
