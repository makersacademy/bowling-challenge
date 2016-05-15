describe("ScoreCalculator:", function() {
  var scoreCalculator
  var frames = []
  var frame

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator()
    frame = jasmine.createSpyObj("frame", ["firstAndSecondRollScore"])
  })

  describe("start of game", function() {
    it("has a total of zero", function() {
      expect(scoreCalculator.calculateTotal(frames)).toEqual(0)
    })
  })

  describe("first roll", function() {
    it("increases total to 1", function() {
      frame.firstAndSecondRollScore.and.returnValue(1);
      frames.push(frame);
      expect(scoreCalculator.calculateTotal(frames)).toEqual(1)
    })
  })

  describe("second roll", function() {
    it("increases total to 2", function() {
      frames = []
      frame.firstAndSecondRollScore.and.returnValue(2);
      frames.push(frame);
      expect(scoreCalculator.calculateTotal(frames)).toEqual(2)
    })
  })

})
