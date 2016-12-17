describe("Knocking pins down", function() {
  var pins;

  beforeEach(function() {
    pins = new KnockDownPin();
    game = jasmine.createSpyObj("game", ["calculateScore", "strike_scored", "spare_scored"])
  })

  describe("scoring",function() {

    beforeEach(function(){
      spyOn(pins,"getRandomInt").and.returnValue(8)
    })

    it("second attempt has a maximum of 10 minus first attempt", function() {
      pins.rollBall();
      expect(pins.rollBall()).not.toBeGreaterThan(2)
    })

    it ("calls a method to calculate the score after the seocond attempt", function() {
      pins.rollBall();
      pins.rollBall();
      expect(game.calculateScore).toHaveBeenCalled()
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

    it("moves to the next frame", function() {
      pins.rollBall();
      expect(frame.moveToNextFrame).toHaveBeenCalled()
    })

    it("calls a strike method", function() {
      pins.rollBall()
      expect(game.strike_scored).toHaveBeenCalled()
    })

  })

  describe("getting a spare", function() {

    beforeEach(function() {
      spyOn(pins, "getRandomInt").and.returnValue(7)
      spyOn(pins, "getRandomIntForSecondAttempt").and.returnValue(3)
      pins.rollBall();
      pins.rollBall();
    })

    it ("should call a spare method", function() {
      expect(game.spare_scored).toHaveBeenCalled()
    })

  })

  describe("not getting a spare", function() {

    beforeEach(function() {
      spyOn(pins, "getRandomInt").and.returnValue(7)
      spyOn(pins, "getRandomIntForSecondAttempt").and.returnValue(2)
      pins.rollBall();
      pins.rollBall();
    })

    it ("should call a spare method", function() {
      expect(game.spare_scored).not.toHaveBeenCalled()
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
