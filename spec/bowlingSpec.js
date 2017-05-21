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
  })

  describe("knock down pins", function() {
    it("returns the score from the play", function() {
      spyOn(bowling._play,"knockDown")
      bowling.knockDown(1)
      expect(bowling._play.knockDown).toHaveBeenCalledWith(1);
    })
  })

})
