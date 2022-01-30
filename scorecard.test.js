const Scorecard = require('./scorecard');
const Frame = require('./frame');

describe('Scorecard', () => {
  beforeEach(() => {
    scorecard = new Scorecard();
  });
  
  it('can calculate a perfect game', () => {
    for(i = 1; i < 10 ; i++) {
      scorecard.input_frame([10]);
    }
    scorecard.input_frame([10,10,10]);
    //console.log(scorecard.frames);
    
    expect(scorecard.score()).toBe(300);
  });

  it('can calculate a no bonus game', () => {
    for(i = 1; i < 11 ; i++) {
      scorecard.input_frame([3,3]);
    }
    console.log(scorecard.frames);
  
    expect(scorecard.score()).toBe(60);
  });
});