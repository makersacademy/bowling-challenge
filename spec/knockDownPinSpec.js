describe("Knocking pins down", function() {
  var pins;

  beforeEach(function() {
    pins = new KnockDownPin();
  })

  describe("scoring",function() {

    it("returns a whole number between one and ten", function() {
      attempt = pins.attemptBall()
      expect(attempt >= 0 && attempt <= 10).toEqual(true)
    })

    it("the maximum score for second attempt is the remainder of the first attempt", function() {
      attempt = pins.attemptBall()
      expect(pins.attemptBall()).not.toBeGreaterThan(10-attempt)
    })
  })

  describe("attempt", function() {

    it("Keeps track of the number of attempts", function() {
      expect(pins.attempts).toBeDefined()
    })

    it("Starts off with no attempts", function() {
      expect(pins.attempts).toEqual(0)
    })

    it("Moves to the next attempt", function() {
      pins.attemptBall();
      expect(pins.attempts).toEqual(1)
    })

    it("Raises an error when the maximum number of attempts is reached", function() {
      for (count=0; count<2; count++) {
        pins.attemptBall();
      }
      expect(function() {pins.attemptBall()}).toThrow(new Error("Maximum attempts reached"))
    })

    it("Resets the attempts back to zero", function() {
      pins.attemptBall();
      pins.resetAttempts();
      expect(pins.attempts).toEqual(0)
    })

  })
})
