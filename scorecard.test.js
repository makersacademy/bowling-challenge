const Scorecard = require('./scorecard');
const Frame = require('./frame');

describe('Scorecard', () => {
  beforeEach() {
    scorecard = new Scorecard();
  }
  
  it('can calculate a no bonus game', () => {
    for(i = 1; i < 11 ; i++) {
      scorecard.input_frame([3,3]);
    }
  });

  it('can calculate a no bonus game', () => {
    for(i = 1; i < 11 ; i++) {
      scorecard.input_frame([3,3]);
    }
    expect(scorecard.score).toBe(60)
  });
} 