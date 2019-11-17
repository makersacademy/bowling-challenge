'use strict';
describe('Frame', function() {

  it("strike frame", function(){
    var frame = new Frame(10,0);
    expect(frame.isAStrike()).toEqual(true);
  });

  it("not a strike frame", function(){
    var frame = new Frame(9,0);
    expect(frame.isAStrike()).toEqual(false);
  });

  it("spare frame", function(){
    var frame = new Frame(1,9);
    expect(frame.isASpare()).toEqual(true);
  });

  it("hard spare frame", function(){
    var frame = new Frame(0,10);
    expect(frame.isASpare()).toEqual(true);
  });

  it("not a spare frame", function(){
    var frame = new Frame(4,5);
    expect(frame.isASpare()).toEqual(false);
  });
});
