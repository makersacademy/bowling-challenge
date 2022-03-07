const ScoreCard = require('./scorecard')

describe('ScoreCard', () => {
  let scorecard
  const frameDouble = { frameScore: () => 5 }

  beforeEach(() => {
    scorecard = new ScoreCard()
  })

  it('gives the score at the start of a scorecard', () => {
    expect(scorecard.gameTotalScore()).toBe(0)
  })

  it('gives the frame number at the start of a scorecard', () => {
    // Due to it( being an array the first frame is 0 and the last is 9 but frame number starts at 1
    expect(scorecard.currentFrameNumber()).toBe(0)
  })

  it('records game as complete when 10 frames have been bowled', () => {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(scorecard.gameIsComplete()).toEqual(true)
  })

  it('knows a gutter ball on the first roll of the first scorecard scores zero', () => {
    scorecard = new ScoreCard()
    frameDouble.frameScore = 0
    scorecard.addFrame(frameDouble)
    expect(scorecard.gameTotalScore()).toBe(0)
  })

  it('knows a roll of one on the first roll of the first scorecard scores one', () => {
    scorecard = new ScoreCard()
    frameDouble.frameScore = 1
    scorecard.addFrame(frameDouble)
    expect(scorecard.gameTotalScore()).toBe(1)
  })

  it('captures when a frame has been played', () => {
    scorecard.addFrame(frameDouble)
    expect(scorecard.frames.length).toEqual(1)
  })

  // it("knows if the previous frame had a spare", () => {
  //   let frameIsSpareDouble = {
  //     frameScore: () => 10,
  //     spareBoolean: () => true
  //   };
  //   scorecard.addFrame(frameIsSpareDouble);
  //   scorecard.addFrame(frameDouble);
  //   expect(scorecard.isPreviousFrameSpare(frameDouble)).toEqual(true);
  // });

  it('will complete the game when the tenth frame is added', () => {
    scorecard.frames = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(scorecard.gameIsComplete()).toEqual(false)
    scorecard.addFrame(frameDouble)
    expect(scorecard.gameIsComplete()).toEqual(true)
  })
})
