describe("Ball", function() {
  var ball;

  beforeEach(function() {
    ball = new Ball;
  })

  describe("#roll", function() {
    it("returns a random number of pins hit from 0 to 10", function() {
      expect(ball.roll(10)).not.toEqual(null);
    })
  })
})
