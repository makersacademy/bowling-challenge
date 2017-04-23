'use strict';

describe("A frame of bowling", function(){
  it("calculates a total for two roles", function(){
    var frame = new Frame([5,2]);
    expect(frame.total()).toEqual(7);
  });
});
