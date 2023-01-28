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

  it('calculates the current score for a basic game with no strikes/spares', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    const frame3 = new Frame();

    frame1.addRollsToFrame(1,2)
    frame2.addRollsToFrame(5,3)
    frame3.addRollsToFrame(6,1)
    
    scoreCard.addFrame(frame1)
    scoreCard.addFrame(frame2)
    scoreCard.addFrame(frame3)
    
    expect(scoreCard.calculateScore()).toEqual(18)
  })

  it('calculates the current score for a game with a strike', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    const frame3 = new Frame();

    frame1.addRollsToFrame(1,2)
    frame2.addRollsToFrame(10, 0)
    frame3.addRollsToFrame(6,1)
    
    scoreCard.addFrame(frame1)
    scoreCard.addFrame(frame2)
    scoreCard.addFrame(frame3)
    expect(scoreCard.calculateScore()).toEqual(27)
  })

  it('calculates the current score for a game with a spare', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    const frame3 = new Frame();

    frame1.addRollsToFrame(1,2)
    frame2.addRollsToFrame(7, 3)
    frame3.addRollsToFrame(6,1)
    
    scoreCard.addFrame(frame1)
    scoreCard.addFrame(frame2)
    scoreCard.addFrame(frame3)
    expect(scoreCard.calculateScore()).toEqual(26)
  })

  it('calculates the current score for a game with a strike and spare', () => {
    const scoreCard = new ScoreCard();
    const frame1 = new Frame();
    const frame2 = new Frame();
    const frame3 = new Frame();
    const frame4 = new Frame();
    const frame5 = new Frame();

    frame1.addRollsToFrame(1,2)
    frame2.addRollsToFrame(7, 3)
    frame3.addRollsToFrame(6,1)
    frame4.addRollsToFrame(10,0)
    frame5.addRollsToFrame(5,2)
    
    scoreCard.addFrame(frame1)
    scoreCard.addFrame(frame2)
    scoreCard.addFrame(frame3)
    scoreCard.addFrame(frame4)
    scoreCard.addFrame(frame5)
    expect(scoreCard.calculateScore()).toEqual(50)
  })
})