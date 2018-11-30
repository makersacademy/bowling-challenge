var Frame = require('../src/frame.js');

describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  it("is an instance of Frame", function() {
    expect(frame).toEqual(jasmine.any(Frame));

  });

});
