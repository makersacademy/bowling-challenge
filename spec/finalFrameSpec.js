var FinalFrame = require('../src/finalFrame.js');


describe('FinalFrame', function() {
  var fFrame;

  beforeEach(function() {
    fFrame = new FinalFrame();
  });

  it('has an array of rolls', function() {
    expect(fFrame.rolls).toEqual([])
  });

  it('adds to the rolls when the player rolls', function() {
    fFrame.roll(3);
    expect(fFrame.rolls).toEqual([3])
  });

  it('always lets the player make at least two rolls', function() {
    fFrame.roll(3);
    fFrame.roll(4);
    expect(fFrame.rolls).toEqual([3, 4]);
  });

  it('lets the player strike twice', function() {
    fFrame.roll(10);
    fFrame.roll(10);
    expect(fFrame.strikes).toEqual([true, true]);
  });

  it('calculates the score for no spares/strikes', function () {
    fframe.roll(3)
    fframe.roll(3)
    expect(fframe.calculateScore()).toEqual(6)
  })

  it('calculates the score for a spare on roll 1', function () {
    fframe.roll(3)
    fframe.roll(7)
    fframe.roll(4)
    expect(fframe.calculateScore()).toEqual(18)
  })

  it('calculates the score for a strike on roll 0', function () {
    fframe.roll(10)
    fframe.roll(3)
    fframe.roll(4)
    expect(fframe.calculateScore()).toEqual(24)
  })

  it('calculates the score for two strikes on rolls 0 and 1', function () {
    fframe.roll(10)
    fframe.roll(10)
    fframe.roll(4)
    expect(fframe.calculateScore()).toEqual(42)
  })

  it('errors if the player makes a third roll without a spare', function() {
    fFrame.roll(3);
    fFrame.roll(4);
    expect(function() {
      fFrame.roll(2)
    }).toThrowError('The frame is already over.')
  });

  it('errors if the player tries to score more than 10', function() {
    fFrame.roll(3);
    fFrame.roll(4);
    expect(function() {
      fFrame.roll(2)
    }).toThrowError('The frame is already over.')
  });

  it('errors if the player tries to score more than remaining', function() {
    fFrame.roll(3);
    expect(function() {
      fFrame.roll(8)
    }).toThrowError('You cannot knock down more pins than there are standing.')
  });

  it('errors if the player tries to score more than remaining after strike', function() {
    fFrame.roll(10);
    fFrame.roll(3);
    expect(function() {
      fFrame.roll(8)
    }).toThrowError('You cannot knock down more pins than there are standing.')
  });
});
