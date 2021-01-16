'use strict';

describe('Score', () => {
  var score;
  var frame;
  var game; 

  beforeEach(()=> {
    score = new Score();
    frame = jasmine.createSpy(frame);
    game = jasmine.createSpy(game);
  })

  describe("Frame Scores", () => {

    it("should calculate the frame score", () => {
      frame = [6,2]
      expect(score.calculateFrameScore(frame)).toEqual(8);
    })
  })

  describe("Total Score", () => {
    it("should calculate the total score", () => {
      let frameScores = [1,1,1,1,1]
      expect(score.calculateTotalScore(frameScores)).toEqual(5);
    })
  })

})