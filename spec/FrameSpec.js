"use strict";

describe("Frame", function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("initializes with ten pins", function() {
    expect(frame._pins).toEqual(10);
  });

  it("knocks down random number of pins", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    expect(frame._pins).toEqual(6);
  });

  it("stores number of pins knocked down in first bowl", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    expect(frame._bowls).toEqual([4]);
  });

  it("stores number of pins knocked down in second bowl", function() {
    spyOn(Math, 'floor').and.returnValue(4);
    frame.bowl();
    frame.bowl();
    expect(frame._bowls).toEqual([4, 4]);
  });

  
  });
