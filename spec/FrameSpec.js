"use strict";

describe("Frame", function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });

  it("initializes with ten pins", function() {
    expect(frame._pins).toEqual(10);
  });
  })
