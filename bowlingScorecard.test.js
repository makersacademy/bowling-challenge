const BowlingScorecard = require('./bowlingScorecard');

describe('bowlingScorecard', () => {
  
  it('returns total score', () => {
  const myScorecard = new BowlingScorecard()
  expect(myScorecard.getTotal()).toBe(0)
  });

  it('adds a frame to the scorecard', () => {
    const myScorecard = new BowlingScorecard()
    myScorecard.loadFrame([5,4])
    myScorecard.loadFrame([10])
    expect(myScorecard.getTotal()).toBe(19)
  });

  it('adds a frame to the scorecard', () => {
    const myScorecard = new BowlingScorecard()
    myScorecard.loadFrame([5,4])
    expect(myScorecard.getTotal()).toBe(9)
  });

  it('adds first ball roll of current non-strike frame to previous, if strike or spare', () => {
    const myScorecard = new BowlingScorecard()
    myScorecard.loadFrame([10])
    myScorecard.handleRegularFrame(8)
    expect(myScorecard.getTotal()).toBe(26)
  });


  // it('adds result of ball roll to framescore', () => {
  //   const myScorecard = new BowlingScorecard()
  //   const framescore = [] ???
  //   myScorecard.loadFrame([5,4])
  //   expect(myScorecard.getTotal()).toBe(9)
  // });




});

