'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can score zero", function() {
    expect(frame.score()).toEqual(0);
  });

});
