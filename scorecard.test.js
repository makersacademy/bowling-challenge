const Scorecard = require('./scorecard');
const Frame = require('./frame');

beforeEach(() => {
  sut = new Scorecard();
});

describe('Scorecard', () => {

  it('checks that scorecard is an instance of the Scorecard Class', () => {
    expect(sut).toBeInstanceOf(Scorecard);
  });

  it('initiates with an empty frame array that has also been initialized', () => {
    expect(sut.allFrames).toEqual([{"complete": false, 
    "points": 0, 
    "rollOne": null, 
    "rollThree": null, 
    "rollTwo": null, 
    "round": 1}]);
  });

  it('checks what round we are currently on', () => {
    expect(sut.round).toEqual(1);
  
  });
});
