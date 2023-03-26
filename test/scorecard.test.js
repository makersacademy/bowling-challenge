const Scorecard = require('../lib/scorecard');

describe ('Scorecard', () => {
 
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  // Tests for addFrame()

  it ('throws an error if the rolls are an invalid input', () => {
    expect(() => {
      scorecard.addFrame(15, 1)
    }).toThrow('Input 1 is invalid. Retry.');

    expect(() => {
      scorecard.addFrame(5, 11)
    }).toThrow('Input 2 is invalid. Retry.');

    expect(() => {
      scorecard.addFrame(5, 6)
    }).toThrow('You can only hit 10 pins in one frame except in the tenth.');
  });

  it ('throws an error if you call the method addFrame on the tenth frame', () => {
    expect(() => {
      for (let i = 0; i < 11; i++) {
        scorecard.addFrame(9, 1)
      }
    }).toThrow('This is the tenth frame, use method addTenthFrame instead');
  });
 
  it ('adds a frame to the scorecard', () => {
    scorecard.addFrame(1, 2);

    expect(scorecard.game).toEqual([1, 2]); 
  });

  it ('adds a frame to the scorecard', () => {
    scorecard.addFrame(1, 2);
    scorecard.addFrame(4, 5);

    expect(scorecard.game).toEqual([1, 2, 4, 5]); 
  });

  // Tests for addTenthFrame

});