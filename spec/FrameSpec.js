'use strict';

describe("Frame", function() {

  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  it("has a score of zero at the start", function() {
    expect(frame.score).toEqual([]);
  });

  it("can calculate a first score", function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.calculateScore(0);
    expect(frame.score).toContain(4);
  });

  it("can calculate a second score", function() {
    frame.score = [4]
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.calculateScore(4);
    expect(frame.score).toContain(4, 6);
  });

});
