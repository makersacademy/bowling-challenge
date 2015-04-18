describe('Ball', function() {

  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it('should have a score of 0 by default', function() {
    expect(ball.score).toEqual(0);
  });

  it("should be able to set it's score", function() {
    ball.setScore(1);
    expect(ball.score).toEqual(1);
  });

  it('should have a status of unrolled when created', function() {
    expect(ball.isRolled).toBe(false);
  });

});
