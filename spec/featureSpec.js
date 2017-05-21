describe("Feature test:", function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling()
  })

  describe("start of game", function() {
    it("has a total of zero", function() {
      expect(bowling.calculateTotal()).toEqual(0)
    })
  })

  describe("first roll", function() {
    it("has a total of 1", function() {
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(1)
    })
  })

  describe("second roll", function() {
    it("has a total of 2", function() {
      bowling.knockDown(1)
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(2)
    })
  })

})
