'use strict';

describe("A frame of bowling", function(){
  it("calculates a total for two roles", function(){
    var frame = new Frame([5,2]);
    expect(frame.total()).toEqual(7);
  });

  it("calculates a total for a spare", function(){
    var frame = new Frame([8,2]);
    var next_frame = new Frame([1,4]);
    expect(frame.total(next_frame)).toEqual(11);
  });

  it("calculates a total for a strike", function(){
    var frame = new Frame([10]);
    var next_frame = new Frame([3,6]);
    expect(frame.total(next_frame)).toEqual(19);
  });

  it("calculates a total for two strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_to_next_frame = new Frame([3, 4]);
    expect(frame.total(next, next_to_next_frame)).toEqual(23);
  });

  it("calculates three strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_to_next_frame = new Frame([10]);
    expect(frame.total(next, next_to_next_frame)).toEqual(30);
  });

  it ("calculates a strike in the final frame", function(){
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  it ("calculates a strike in the one before final frame", function(){
    var frame = new Frame([10]);
    var next = new Frame([10,10,10]);
    expect(frame.total(next)).toEqual(30);
  });
});
