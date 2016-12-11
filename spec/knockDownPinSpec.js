describe("Knocking pins down", function() {
  var pins;
  beforeEach(function() {
    pins = new KnockDownPin()
  })

  describe("attempt", function() {
    it("returns a whole number between one and ten", function() {
      attempt = pins.attemptBall()
      expect(attempt >= 0 && attempt <= 10).toEqual(true)
    })

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
