describe("Bowling", function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

  describe("calculate score", function() {
    it("returns the score from the play", function() {
      spyOn(bowling._play,"calculate").and.returnValue(1);
      expect(bowling.calculateTotal()).toEqual(1)
    })

    it("returns the score from the play", function() {
      spyOn(bowling._play,"isGameOver").and.returnValue(true)
      spyOn(bowling._play,"calculate").and.returnValue(300)
      expect(bowling.calculateTotal()).toEqual("Game over! You scored 300")
    })
  })

  describe("knock down pins", function() {
    it("returns the score from the play", function() {
      spyOn(bowling._play,"knockDown")
      bowling.knockDown(1)
      expect(bowling._play.knockDown).toHaveBeenCalledWith(1)
    })
  })

  describe("add roll to rolls_array", function() {
    it("adds pins to the rolls array", function() {
      bowling.addRoll(3)
      expect(bowling.rolls()).toEqual([3])
    })
  })

  describe("returns the rolls array", function() {
    it("returns the score from the play", function() {
      spyOn(bowling._play,"calculate").and.returnValue(1);
      expect(bowling.calculateTotal()).toEqual(1)
    })
  })

  describe("check if permitted value for roll", function() {
    it("returns false when first+second roll score > 10", function() {
      spyOn(bowling._play,"permittedValue").and.returnValue(false);
      expect(bowling.permittedValue()).toBeFalsy()
    })
    it("returns true when first+second roll score <= 10", function() {
      spyOn(bowling._play,"permittedValue").and.returnValue(true);
      expect(bowling.permittedValue()).toBeTruthy()
    })
  })

})
