'use strict';

describe('Ball', function () {
  var ball;

  beforeEach(function() {
      ball = new Ball();
  });

  it('can get points when thrown', function (){
    expect(ball.roll()).toMatch(/\d{0,}/);
  });

  it('can get max 10 points when thrown', function (){
    expect(ball.roll()).toBeLessThan(11);
  });

  it('can tell if the roll is a strike', function() {
    Math.seed = 6;
    ball.roll();
    expect(ball.isStrike()).toBe(false);
  });

});
