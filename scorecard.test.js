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
    expect(scorecard.score()).toBe(300);
  });

  it('can calculate a gutter game', () => {
    for(i = 1; i < 11 ; i++) {
      scorecard.input_frame([0]);
    }
    expect(scorecard.score()).toBe(0);
  });

  it('can calculate a game with spare in final frame', () => {
    for(i = 1; i < 10 ; i++) {
      scorecard.input_frame([10]);
    }
    scorecard.input_frame([5,5,5]);

    expect(scorecard.score()).toBe(270);
  });

  it('can calculate a game with spare in penultimate frame and strike in final frame', () => {
    for(i = 1; i < 9 ; i++) {
      scorecard.input_frame([10]);
    }
    scorecard.input_frame([5,5]);
    scorecard.input_frame([10,10,2]);
    //console.log(scorecard.frames);
    expect(scorecard.score()).toBe(267);
  });

  it('can calculate a game with spare in penultimate frame and spare in final frame', () => {
    for(i = 1; i < 9 ; i++) {
      scorecard.input_frame([10]);
    }
    scorecard.input_frame([5,5]);
    scorecard.input_frame([5,5,2]);
    //console.log(scorecard.frames);
    expect(scorecard.score()).toBe(252);
  });

  it('can calculate a no bonus game', () => {
    for(i = 1; i < 11 ; i++) {
      scorecard.input_frame([3,3]);
    }
    console.log(scorecard.frames);
  
    expect(scorecard.score()).toBe(60);
  });
});