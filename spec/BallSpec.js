describe('Ball', function() {

  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it('should have a score of 0 by default', function() {
    expect(ball.score).toEqual(0);
  });

});
