describe("Play", function() {
  var play

  beforeEach(function() {
    play = new Play()
  })

  describe("calculate score", function() {
    it("returns the score from the scoreCalculator", function() {
      spyOn(play._scoreCalculator,"calculateTotal").and.returnValue(1);
      expect(play.calculate()).toEqual(1)
    })
  })

  describe("number of frames", function() {
    it("starts at 0", function() {
      expect(play._frames.length).toEqual(0)
    })

    it("first roll increases number of frames to 1", function() {
      play.knockDown(1)
      expect(play._frames.length).toEqual(1)
    })

    it("second roll keeps number of frames at 1", function() {
      play.knockDown(1)
      play.knockDown(1)
      expect(play._frames.length).toEqual(1)
    })
  })


})
