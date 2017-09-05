'use strict';

// unit tests for functions in bowling.js

describe('isStrike', function() {

  it('detects a strike', function() {
    expect(isStrike(1, 10)).toEqual(true);
  });

  it('detects a lack of strike', function() {
    expect(isStrike(1, 7)).toEqual(false);
  });

});

describe('isSpare', function() {

  it('detects a spare', function() {
    expect(isSpare(2, 10)).toEqual(true);
  });

  it('detects a lack of strike', function() {
    expect(isSpare(2, 7)).toEqual(false);
  });

});

describe('isFrameOver', function() {

  it('detects whether testing normal frame is over', function() {
    // params are frameRollNum, pinsScore, frameNum
    expect(isFrameOver(2, 8, 1)).toEqual(true);
  })

  describe('when in frame 10', function() {

    it('ends a normal frame on roll 2', function() {
      // params are frameRollNum, pinsScore, frameNum
      expect(isFrameOver(2, 7, 10)).toEqual(true);//
    });

    it('does not end a frame because of a strike', function() {
      // params are frameRollNum, pinsScore, frameNum
      expect(isFrameOver(1, 10, 10)).toEqual(false);
    });

    it('allows a single roll frame to continue', function() {
      // params are frameRollNum, pinsScore, frameNum
      expect(isFrameOver(1, 2, 10)).toEqual(false);
    });

    it('correctly copes with variety of other scenarios', function() {
      // params are frameRollNum, pinsScore, frameNum
      expect(isFrameOver(1,  2, 10)).toEqual(false);
      expect(isFrameOver(2,  1, 10)).toEqual(true);//
      expect(isFrameOver(2, 10, 10)).toEqual(false);
      expect(isFrameOver(3, 10, 10)).toEqual(true);//
    });
  });
});

describe('sumRolls', function() {

  it('finds the value of the bonus when defined', function() {
    expect(sumRolls([3,7,2,7,3,10], 2, 1)).toEqual(2);
    expect(sumRolls([3,7,2,7,3,10], 3, 2)).toEqual(10);
    expect(sumRolls([3,7,2,7,3,10], 3, 3)).toEqual(20);
  });

  it('returns null when not defined', function() {
    expect(sumRolls([3,7], 2, 1)).toEqual(null);
    expect(sumRolls([3,7], 1, 3)).toEqual(null);
    expect(sumRolls([3,7,2,7,3,10], 3, 4)).toEqual(null);
  });
});
