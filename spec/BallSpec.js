'use strict';

describe('Ball', function () {
  var ball;

  beforeEach(function() {
      ball = new Ball();
  });

  it('can get points when thrown', function (){
    ball.roll();
    expect(ball.roll()).toMatch(/\d{0,10}/);
  });

  it('can get max 10 points when thrown', function (){
    ball.roll();
    expect(ball.roll()).toBeLessThan(11);
  });

});
