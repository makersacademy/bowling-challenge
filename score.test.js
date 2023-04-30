const Score = require('./score.js')
jest.mock('./score.js')

describe('Score class', () => {
  it('returns score', () => {
    //Create a mockScore, which is a mock score that tests the function
    const mockAddScore = new Score(7, {});
    //Rig the outcome here, so that it returns what is expected, i.e mockScore. Use mockImplementation function here.
    //mockScore calls a function, the outcome of which is the score object that we are using to test this method
    mockAddScore.addScore.mockImplementation(() => {
      return {
        scorecard: 7,
        rollone: 3,
        rolltwo: 4,
        rollthree: 0}
    })
  })

  it('calculates and returns the new score', () => {
    const mockCalculateScore = new Score(4, {});
    mockCalculateScore.calculateScore.mockImplementation(() => {
      return {
        scorecard: 4,
        rollone: 3,
        rolltwo: 1,
        rollthree: 0}
    })
  })

  it('pushes the results of one frame to the scorecard and returns result', () => {
    const doubleframeOne = {rollone + rolltwo ()  => { return 4 } };
    const frameOne = new Score(4, doubleframeOne);
    let theFrame = frameOne.addFrame();
    expect(theFrame).toEqual(4);

  })

})