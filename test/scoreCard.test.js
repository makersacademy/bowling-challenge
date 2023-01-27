const ScoreCard = require('../lib/scoreCard')
const Frame = require('../lib/frame')

describe('ScoreCard', () => {
  it("takes a roll and increases the current roll by 1", () => {
    const scoreCard = new ScoreCard();
    expect(scoreCard.getRoll(4)).toEqual(4)
  })

  it('takes two rolls and adds them to the first frame', () => {
    const scoreCard = new ScoreCard();
    scoreCard.getRoll(5)
    scoreCard.getRoll(3)
    expect(scoreCard.currentGame).toEqual([[5,3], [], [], [], [], [], [], [], [], []])
  })

  it('takes 4 rolls and adds them to the two frames', () => {
    const scoreCard = new ScoreCard();
    scoreCard.getRoll(5)
    scoreCard.getRoll(3)
    scoreCard.getRoll(1)
    scoreCard.getRoll(2)
    expect(scoreCard.currentGame).toEqual([[5,3], [1,2], [], [], [], [], [], [], [], []])
  })
})

// Get user rolls in scorecard class
// Create a new frame
// add user rolls to that frame
// check methods

// const scoreCard = new Scorecard()
// let roll1 = getRoll(5)
// let roll2 = getRoll(4)
// const frame = new Frame(roll1, roll2)