describe("Scorecard",function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard()
  })

  it("should have empty frames", function() {
    expect(scorecard.frames).toEqual({1: []})
  })

  describe("addRoll",function(){
    it("should add roll to frames",function(){
      scorecard.addRoll(5)
      expect(scorecard.frames[1][0]).toEqual(5)
    })
    it("should add second roll to second slot in frame",function(){
      scorecard.addRoll(5)
      scorecard.addRoll(8)
      expect(scorecard.frames[1]).toEqual([5,8])
    })
    it("moves on to next frame if first roll is 10",function(){
      scorecard.addRoll(10)
      expect(scorecard.currentFrameNum()).toEqual(2)
    })
    it("should not be added if 10 frames have been completed")
  })

  describe("currentFrame",function() {
    it("should return the current Frame",function(){
      expect(scorecard.currentFrame()).toEqual([])
    })
  })

  describe("currentFrameNum",function() {
    it("should return 1 when no roll has been made",function(){
      expect(scorecard.currentFrameNum()).toEqual(1)
    })
    it("should return 2 when two rolls under 10 have been made",function(){
      scorecard.addRoll(5)
      scorecard.addRoll(8)
      expect(scorecard.currentFrameNum()).toEqual(2)
    })
  })

  describe("addNewFrame",function() {
    it("should add new frame",function(){
      scorecard.addNewFrame()
      expect(scorecard.currentFrameNum()).toEqual(2)
    })
  })

  describe("isCurrentFrameNew",function() {
    it("should return true when no roll has been made",function() {
      expect(scorecard.isCurrentFrameNew()).toEqual(true)
    })
    it("should return false when one roll less than 10 has been made",function() {
      scorecard.addRoll(8)
      expect(scorecard.isCurrentFrameNew()).toEqual(false)
    })
    it("should return true when one roll with 10 has been made",function() {
      scorecard.addRoll(10)
      expect(scorecard.isCurrentFrameNew()).toEqual(true)
    })
  })
})
