describe("Knocking pins down", function() {
  var pins;

  beforeEach(function() {
    game = jasmine.createSpyObj("game", ["calculateScore", "strike_scored", "spare_scored"])
    pins = new KnockDownPin(game);
  })

  describe("scoring",function() {

    it("second attempt has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"getRandomInt").and.returnValue(8)
      pins.rollBall();
      expect(pins.rollBall()).not.toBeGreaterThan(2)
    })

    it("second attempt has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"getRandomInt").and.returnValue(3)
      pins.rollBall();
      expect(pins.rollBall()).not.toBeGreaterThan(7)
    })

    it("second attempt has a maximum of 10 minus first attempt", function() {
      spyOn(pins,"getRandomInt").and.returnValue(6)
      pins.rollBall();
      expect(pins.rollBall()).not.toBeGreaterThan(4)
    })



  })

  describe("getting a strike on the first roll", function() {

    beforeEach(function() {
      spyOn(pins,"getRandomInt").and.returnValue(10)
      frame = jasmine.createSpyObj("frame",["moveToNextFrame"])
    })

    it("rolls should be set to zero", function() {
      pins.rollBall();
      expect(pins.rolls).toEqual(0)
    })

  })

  describe("getting a spare", function() {

    beforeEach(function() {
      spyOn(pins, "getRandomInt").and.returnValue(7)
      spyOn(pins, "getRandomIntForSecondAttempt").and.returnValue(3)
      pins.rollBall();
      pins.rollBall();
    })

  })

  describe("not getting a spare", function() {

    beforeEach(function() {
      spyOn(pins, "getRandomInt").and.returnValue(7)
      spyOn(pins, "getRandomIntForSecondAttempt").and.returnValue(2)
      pins.rollBall();
      pins.rollBall();
    })
  })

  describe("attempt", function() {

    it("returns a whole number between one and ten", function() {
      attempt = pins.rollBall();
      expect(attempt >= 0 && attempt <= 10).toEqual(true)
    })

    it("Starts off with no rolls", function() {
      expect(pins.rolls).toEqual(0)
    })

    it("Moves to the next attempt", function() {
      pins.rollBall();
      expect(pins.rolls).toEqual(1)
    })

    it("Resets the pins when two rolls have been made", function() {
      for (count=0; count<2; count++) {
        pins.rollBall();
      }
      expect(pins.rolls).toEqual(0)
    })
  })
})
