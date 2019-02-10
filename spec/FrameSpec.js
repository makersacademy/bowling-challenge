'use strict';

describe("Frame", function() {

  var frame;
  // var ball1;

  beforeEach(function() {
    frame = new Frame();
    // ball1 = new Ball();
  });

  it("can score zero", function() {
    expect(frame.score()).toEqual(0);
  });

  it("can score a strike", function() {
    expect(frame.score()).toEqual(10);
  });

});
