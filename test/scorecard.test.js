const Scorecard = require('../lib/scorecard');

describe ('Scorecard', () => {
 
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  // Tests for validateRolls() 

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

  // Tests for tenthFrameError()

  it ('throws an error if you call the method addFrame on the tenth frame', () => {
    expect(() => {
      for (let i = 0; i < 11; i++) {
        scorecard.addFrame(9, 1)
      }
    }).toThrow('This is the tenth frame, use method addTenthFrame instead');
  });
 
  // Tests for addFrame()

  it ('adds a frame to the scorecard', () => {
    scorecard.addFrame(1, 2);

    expect(scorecard.game).toEqual([1, 2]); 
  });

  it ('adds a frame to the scorecard', () => {
    scorecard.addFrame(1, 2);
    scorecard.addFrame(4, 5);

    expect(scorecard.game).toEqual([1, 2, 4, 5]); 
  });

  // Tests for isTenthFrame()

  it ("it throws an error if all the other 9 frames haven't been played yet", () => {
    scorecard.addFrame(1, 2);
    scorecard.addFrame(4, 5);
    expect(() => {
      scorecard.isTenthFrame(1, 2, 3);
    }).toThrow('You did not reach the tenth frame yet, use method addFrame instead');
  });

  // Tests for addTenthFrame()

  it ('turns the 3rd roll to 0 is in the first 2 there is no spare or strike', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.addFrame(8, 2);
    }
    scorecard.addTenthFrame(1, 2, 3);
    expect(scorecard.game.slice(-1)[0]).toEqual(0);
  });

  it ('stores all three rolls as they are if there is a strike in the first two', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.addFrame(8, 2);
    }
    scorecard.addTenthFrame(10, 10, 10);
    expect(scorecard.game.slice(-1)[0]).toEqual(10);
    expect(scorecard.game.slice(-2)[0]).toEqual(10);
    expect(scorecard.game.slice(-3)[0]).toEqual(10);
  });

  it ('stores all three rolls as they are if there is a spare in the first two', () => {
    for (let i = 0; i < 9; i++) {
      scorecard.addFrame(8, 2);
    }
    scorecard.addTenthFrame(8, 2, 10);
    expect(scorecard.game.slice(-1)[0]).toEqual(10);
    expect(scorecard.game.slice(-2)[0]).toEqual(2);
    expect(scorecard.game.slice(-3)[0]).toEqual(8);
  });

  

});