var Frame = require("../lib/frame");

describe("A frame of bowling", function(){

  it("calculates a total for two roles", function(){
    var frame = new Frame([1,3]);
    var next = new Frame([0,0]);
    expect(frame.total()).toEqual(4);
  });

  it("calculates a total for a spare", function(){
    var frame = new Frame([5,5]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(15);
  });

  it("calculates a total for a strike", function(){
    var frame = new Frame([10]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(17);
  });

  it("calculates a total for two strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_but_next = new Frame([5, 2]);
    expect(frame.total(next, next_but_next)).toEqual(25);
  });

  it("calculates three strikes in a row", function(){
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var next_but_next = new Frame([10]);
    expect(frame.total(next, next_but_next)).toEqual(30);
  });

  it ("calculates a strike in the final frame", function(){
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  it ("calculates a strike in the final frame but one", function(){
    var frame = new Frame([10]);
    var next = new Frame([10,10,10]);
    expect(frame.total(next)).toEqual(30);
  });
});
