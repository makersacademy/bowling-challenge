describe("Scoring", function() {
  let scoring

  beforeEach(function() {
    scoring = new Scoring();
  });

  describe("strikes", function() {

    beforeEach(function() {
      scoring.updateCurrentFrame({1:10,2:0})
    });

    it("should identify strikes", function() {
      expect(scoring._isStrike()).toBeTruthy()     
    })

    it("should update counter", function() {
      expect(scoring.strikeCounter).toEqual(1)
    })

  })

  describe("spares", function() {
    it("should identify spares", function() {
      scoring.updateCurrentFrame({1:5,2:5})
      expect(scoring._isSpare()).toBeTruthy()
    })
  })

  describe("adding up the score", function() {

    it("should calculate raw score", function() {
      scoring.updateCurrentFrame({1:3,2:5})
      expect(scoring._rawScore()).toEqual(8)
    })

    it("should calculate the score following a spare", function() {
      scoring.updateCurrentFrame({1:5,2:5})
      scoring.runningScore()
      scoring.updateCurrentFrame({1:2,2:5})
      scoring.runningScore()
      console.log(scoring.arrayOfScores)
      expect(scoring.arrayOfScores).toEqual([12,7])
    })

    it("should calculate the score following a strike", function () {
      scoring.updateCurrentFrame({1:10,2:0})
      scoring.runningScore()
      scoring.updateCurrentFrame({1:2,2:5})
      scoring.runningScore()
      console.log(scoring.arrayOfScores)
      expect(scoring.arrayOfScores).toEqual([17,7])
    })

    it("should calculate the score following multiple strikes", function () {
      scoring.updateCurrentFrame({1:10,2:0})
      scoring.runningScore()
      scoring.updateCurrentFrame({1:10,2:0})
      scoring.runningScore()
      scoring.updateCurrentFrame({1:10,2:0})
      scoring.runningScore()
      scoring.updateCurrentFrame({1:2,2:5})
      scoring.runningScore()
      console.log(scoring.arrayOfScores)
      expect(scoring.arrayOfScores).toEqual([30,22,17,7])
    })
  })

})