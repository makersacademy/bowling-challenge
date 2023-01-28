const Frame = require("../lib/frame");
const ScoreCard = require("../lib/scoreCard");


describe('Frame', () => {
  it('adds a frame to the scorecard and reads it back', () => {
    const scoreCard = new ScoreCard();
    const frame = new Frame();
    scoreCard.addFrame(frame.addRollsToFrame(1,2))
    expect(scoreCard.currentScore()).toEqual([[1,2]])
  })

  it('adds two frames to the scorecard and reads it back', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    scoreCard.addFrame(frame1.addRollsToFrame(1,2))
    scoreCard.addFrame(frame2.addRollsToFrame(5,3))
    expect(scoreCard.currentScore()).toEqual([[1,2], [5,3]])
  })

  it('adds three frames to the scorecard and reads it back', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    const frame3 = new Frame();
    scoreCard.addFrame(frame1.addRollsToFrame(1,2))
    scoreCard.addFrame(frame2.addRollsToFrame(5,3))
    scoreCard.addFrame(frame3.addRollsToFrame(6,1))
    expect(scoreCard.currentScore()).toEqual([[1,2], [5,3], [6,1]])
  })
})