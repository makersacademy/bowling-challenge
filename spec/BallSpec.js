'use strict';

describe('Ball', function () {
  var ball;

  beforeEach(function() {
      ball = new Ball();
  });

  it('can get points when thrown', function (){
    ball.roll(10);
    expect(ball.getThrow()).toMatch(/\d{0,}/);
  });

  it('can get max 10 points when thrown', function (){
    ball.roll(10);
    expect(ball.getThrow()).toBeLessThan(11);
  });

  it('can tell if the roll is a strike', function() {
    ball.roll(9);
    expect(ball.isStrike()).toBe(false);
  });

});
