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
    it("has a total of 0 as frame not complete", function() {
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(0)
    })
  })

  describe("second roll", function() {
    it("has a total of 2", function() {
      bowling.knockDown(1)
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(2)
    })
  })

  describe("spare, then 1", function() {
    it("has a total of 30", function() {
      bowling.knockDown(1)
      bowling.knockDown(9)
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(11)
    })
  })

  describe("strike, then 7,1", function() {
    it("has a total of 30", function() {
      bowling.knockDown(10)
      bowling.knockDown(7)
      bowling.knockDown(1)
      expect(bowling.calculateTotal()).toEqual(26)
    })
  })

  describe("strike, strike, strike", function() {
    it("has a total of 30", function() {
      bowling.knockDown(10)
      bowling.knockDown(10)
      bowling.knockDown(10)
      expect(bowling.calculateTotal()).toEqual(30)
    })
  })

  describe("strike, strike, strike, spare, strike, standard", function() {
    it("has a total of 30", function() {
      bowling.knockDown(10)
      bowling.knockDown(10)
      bowling.knockDown(10)
      bowling.knockDown(1)
      bowling.knockDown(9)
      bowling.knockDown(10)
      bowling.knockDown(3)
      bowling.knockDown(6)
      expect(bowling.calculateTotal()).toEqual(119)
    })
  })

})
