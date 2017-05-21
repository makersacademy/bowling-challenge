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

    it("raise error if first+second roll is greater than 10", function() {
      var error = "Can't score more than 10 per frame!"
      bowling.knockDown(5)
      expect(function() {bowling.knockDown(6)}).toThrowError(error)
    })
  })

  describe("spare, then 1", function() {
    it("has a total of 30", function() {
      [1,9,1].forEach(function(i) {bowling.knockDown(i)})
      expect(bowling.calculateTotal()).toEqual(11)
    })
  })

  describe("strike, then 7,1", function() {
    it("has a total of 30", function() {
      [10,7,1].forEach(function(i) {bowling.knockDown(i)})
      expect(bowling.calculateTotal()).toEqual(26)
    })
  })

  describe("strike, strike, strike", function() {
    it("has a total of 30", function() {
      [10,10,10].forEach(function(i) {bowling.knockDown(i)})
      expect(bowling.calculateTotal()).toEqual(30)
    })
  })

  describe("strike, strike, strike, spare, strike, standard", function() {
    it("has a total of 30", function() {
      [10,10,10,1,9,10,3,6].forEach(function(i) {bowling.knockDown(i)})
      expect(bowling.calculateTotal()).toEqual(119)
    })
  })

  describe("strike x 10", function() {
    it("has a total of 30", function() {
      [1,2,3,4,5,6,7,8,9,10,11,12].forEach(function(i) {bowling.knockDown(10)})
      expect(bowling.calculateTotal()).toEqual("Perfect game! You scored 300")
    })
  })

  describe("gutter game", function() {
    it("has a total of 0", function() {
      for (var i = 1; i <= 20; i++) {
        bowling.knockDown(0)
      }
      expect(bowling.calculateTotal()).toEqual("Gutter game! You scored 0")
    })
  })

})
