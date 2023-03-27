const { ScoreCard } = require('../lib/scoreCard');
const { Frame } = require('../lib/frame');

describe(ScoreCard, () => { 

  let scoreCard;
  let frame;
  beforeEach(() => {
    scoreCard = new ScoreCard()
    frame = new Frame()
  })

  describe("addFrame method", () => {
    it("should not add a frame if its rolls property is not valid", () => {
      expect(scoreCard.addFrame(frame)).toEqual("This frame is not complete")
    })
    it("should not add a frame if a roll is missing", () => {
      frame.addRolls(4)
      expect(scoreCard.addFrame(frame)).toEqual("This frame is not complete")
    })
    it("should add a new frame into the frames property", () => {
      frame.addRolls(4, 5)
      scoreCard.addFrame(frame)
      expect(frame.number).toEqual(1)
    })
    it("should not add any more frame if frames property already has 10 frames", () => {
      for (let i = 0; i < 15; i++) {
        const frame = new Frame()
        frame.addRolls(4, 4)
        scoreCard.addFrame(frame)
      }
      frame.addRolls(4,4)
      expect(scoreCard.frames.length).toEqual(10)
      expect(scoreCard.addFrame(frame)).toEqual("This game is over")
    })
  })
// unfinished work
})


