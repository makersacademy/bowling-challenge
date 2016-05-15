describe("Feature test:", function() {
  var play

  beforeEach(function() {
    play = new Play()
  })

  describe("start of game", function() {
    it("has a total of zero", function() {
      expect(play.calculate()).toEqual(0)
    })
  })

  describe("first roll", function() {
    it("has a total of 1", function() {
      play.knockDown(1)
      expect(play.calculate()).toEqual(1)
    })
  })

})
