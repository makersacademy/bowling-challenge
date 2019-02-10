'use strict';

describe("Ball", function() {

  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it("can roll gutter ball", function() {
    expect(ball.roll()).toEqual(0);
  });



});
