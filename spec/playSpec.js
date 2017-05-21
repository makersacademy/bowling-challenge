describe("Play", function() {
  var play;

  beforeEach(function() {
    play = new Play()
  })


  describe("start of game", function() {
    it("has a total of zero", function() {
      expect(play.calculate()).toEqual(0)
    })
  })




})
