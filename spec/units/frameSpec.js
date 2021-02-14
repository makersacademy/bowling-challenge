'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(2,3);
  });

  it('initializes with pins and a number', function() {
    expect(frame.number).toBe(2);
    expect(frame.pins).toBe(3);
  })

  


})
