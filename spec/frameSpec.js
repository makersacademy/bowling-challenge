'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("starts with 0 score on each roll", function(){
    expect(frame.roll1).toEqual(0);
    expect(frame.roll2).toEqual(0);
  });

  it("knows the score on a standard round", function(){
    frame.addRoll(3);
    frame.addRoll(4);
    expect(frame.roll1).toEqual(3);
    expect(frame.roll2).toEqual(4);
    expect(frame.score()).toEqual(7);
  });
  it("knows when there's a strike", function(){
    expect(frame.mark).toEqual("none");
    frame.addRoll(10);
    expect(frame.mark).toEqual("strike");
  });
  it("knows when there's a spare", function(){
    frame.addRoll(2);
    frame.addRoll(8);
    expect(frame.mark).toEqual("spare");
  });
});