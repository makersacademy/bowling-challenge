describe("Scorecard",function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard()
  })

  it("should have empty frames", function() {
    expect(scorecard.frames).toEqual({1: [null,null]})
  })

  describe("addRoll",function(){
    it("should add roll to frames",function(){
      scorecard.addRoll(5)
      expect(scorecard.frames[1][0]).toEqual(5)
    })
    it("should add second roll to second slot in frame",function(){
      scorecard.addRoll(5)
      scorecard.addRoll(3)
      expect(scorecard.frames[1]).toEqual([5,3])
    })
    it("moves on to next frame if first roll is 10",function(){
      scorecard.addRoll(10)
      expect(scorecard.currentFrameNum()).toEqual(2)
    })
    it("should not be added if 10 frames have been completed",function(){
      for (var i=1; i < 10; i++) { scorecard.addRoll(10) }
      scorecard.addRoll(5)
      scorecard.addRoll(3)
      expect(scorecard.addRoll(4)).toEqual(false)
    })
  })

  describe("currentFrame",function() {
    it("should return the current Frame",function(){
      expect(scorecard.currentFrame()).toEqual([null,null])
    })
  })

  describe("currentFrameNum",function() {
    it("should return 1 when no roll has been made",function(){
      expect(scorecard.currentFrameNum()).toEqual(1)
    })
    it("should return 2 when two rolls under 10 have been made",function(){
      scorecard.addRoll(5)
      scorecard.addRoll(3)
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

  describe("isCurrentFrameComplete",function() {
    it("should return false when no roll has been made",function() {
      expect(scorecard.isCurrentFrameComplete()).toEqual(false)
    })
    it("should return false when one roll less than 10 has been made",function() {
      scorecard.addRoll(3)
      expect(scorecard.isCurrentFrameComplete()).toEqual(false)
    })
    it("should return true when one roll of 10 has been made",function() {
      spyOn(scorecard, 'currentFrame').and.returnValue([10,null])
      expect(scorecard.isCurrentFrameComplete()).toEqual(true)
    })
    it("should return true when two rolls less than 10 have been made",function() {
      spyOn(scorecard, 'currentFrame').and.returnValue([3,5])
      expect(scorecard.isCurrentFrameComplete()).toEqual(true)
    })
  })

  describe("isGameComplete",function() {
    it("should return false when no rolls has been made",function(){
      expect(scorecard.isGameComplete()).toEqual(false)
    })
    it("should return true when 10 frames have been played",function(){
      for (var i=1; i < 10; i++) { scorecard.addRoll(10) }
      scorecard.addRoll(5)
      scorecard.addRoll(3)
      expect(scorecard.isGameComplete()).toEqual(true)
    })
  })

  describe("isFrameStrike",function() {
    it("should return true if first in frame is 10",function(){
      expect(scorecard.isFrameStrike([10,null])).toEqual(true)
    })
    it("should return false if first in frame is not 10",function(){
      expect(scorecard.isFrameStrike([8,2])).toEqual(false)
    })
  })

  describe("isFrameSpare",function() {
    it("should return true if two rolls add to 10",function(){
      expect(scorecard.isFrameSpare([4,6])).toEqual(true)
    })
    it("should return false if two rolls do not add to 10",function(){
      expect(scorecard.isFrameSpare([3,2])).toEqual(false)
    })
    it("should return false if first roll is 10",function(){
      expect(scorecard.isFrameSpare([10,null])).toEqual(false)
    })
  })
})
