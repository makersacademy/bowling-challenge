describe("Ball", function() {
  var ball;

  beforeEach(function() {
    ball = new Ball;
  })

  describe("with randomised result", function() {
    describe("#roll", function() {
      it("returns a random number of pins hit from 0 to 10", function() {
        expect(ball.roll(10)).not.toEqual(null);
      })
    })
  })

  describe("without randomised result", function() {
    describe("#roll", function() {
      beforeEach(function() {
        spyOn(Math, "random").and.returnValue(0.39);
      })
      it("returns a random number of pins hit from 0 to 10", function() {
        expect(ball.roll(10)).toEqual(4);
      })
    })
  })
})
