'use strict';

describe("Ball", function() {

  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it("can roll gutter ball", function() {
    expect(ball.roll(0)).toEqual(0);
  });

  it("can roll to score", function() {
    expect(ball.roll(3)).toEqual(3);
  });


});
