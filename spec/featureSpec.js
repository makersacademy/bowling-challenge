'use strict';

describe("feature test", function(){
  var game;
  var frame;
  var ball;

  it("a ball can be rolled and return a score between 1 & 10", function(){
    ball.roll();
    ball.roll();
    expect(frame.score()).toEqual(6);
  });
});
