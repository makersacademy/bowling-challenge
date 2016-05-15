describe("Play", function() {
  var play;

  beforeEach(function() {
    play = new Play()
  })


  describe("start of game", function() {
    it("has a total of zero", function() {
      expect(play.calculate()).toEqual(0)
    })

    it("has zero frames", function() {
      expect(play._frames.length).toEqual(0)
    })
  })

  describe("first roll", function() {
    it("increases number of frames to 1", function() {
      play.knockDown(1)
      expect(play._frames.length).toEqual(1)
    })

    it("increases total to 1", function() {
      play.knockDown(1)
      expect(play.calculate()).toEqual(1)
    })
  })


})
