describe("Knocking pins down", function() {
  var pins;

  beforeEach(function() {
    pins = new KnockDownPin();
  })

  describe("scoring",function() {

    beforeEach(function(){
      spyOn(pins,"getRandomInt").and.returnValue(8)
    })

    it("second attempt has a maximum of 10 minus first attempt", function() {
      pins.attemptBall();
      expect(pins.attemptBall()).not.toBeGreaterThan(2)
    })

  })

  describe("getting a strike", function() {

    beforeEach(function() {
      spyOn(pins,"getRandomInt").and.returnValue(10)
    })

    it("attempts should be set to zero", function() {
      pins.attemptBall()
      expect(pins.attempts).toEqual(0)
    })

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

    it("Resets the pins when two attempts have been made", function() {
      for (count=0; count<2; count++) {
        pins.attemptBall();
      }
      expect(pins.attempts).toEqual(0)
      expect(pins.firstScore).toEqual(0)
    })
  })

  describe("Resetting the attempt", function() {

    beforeEach(function() {
      pins.attemptBall();
      pins.resetAttempts();
    })

    it("Resets the attempts back to zero", function() {
      expect(pins.attempts).toEqual(0)
    })

    it("Resets the first score back to zero", function() {
      expect(pins.firstScore).toEqual(0)
    })
  })
})
