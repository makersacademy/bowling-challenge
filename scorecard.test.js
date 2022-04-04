const Scorecard = require('./scorecard');
const Frame = require('./frame');

beforeEach(() => {
  scorecard = new Scorecard();
});

describe('Scorecard', () => {

  it('checks that scorecard is an instance of the Scorecard Class', () => {
    expect(scorecard).toBeInstanceOf(Scorecard);
  });

  it('initiates with an empty frame array that has also been initialized', () => {
    expect(scorecard.allFrames).toEqual([{"complete": false, 
    "points": 0, 
    "rollOne": null, 
    "rollThree": null, 
    "rollTwo": null, 
    "round": 1}]);
  });

  it('checks what round we are currently on', () => {
    expect(scorecard.round).toEqual(1);
    // console.log(scorecard.allFrames[scorecard.allFrames.length - 1]);
    // console.log('NEXT');
    // console.log(scorecard.allFrames);
    // console.log('NEXT');
    // console.log([scorecard.allFrames.length - 1]);
  });
});
