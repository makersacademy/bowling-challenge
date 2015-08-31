describe('Bowling Frame', function() {

  beforeEach(function() {
    game = new BowlingGame();
    bowlingFrame = new BowlingFrame(1);
  });

  it('allows you to enter you first score', function() {
    bowlingFrame.rollOne(7);
    expect(game.currentGame[1]).toEqual([7,null]);
  });

  it('rises an error if you input a score above 10', function() {
    expect(function() {bowlingFrame.rollOne(11); }).toThrow(new Error('Roll must be between 0 and 10'));
  });

  it('rises an error if you input a score is below 0', function() {
    expect(function() {bowlingFrame.rollOne(-1); }).toThrow(new Error('Roll must be between 0 and 10'));
  });

  it('allows you to enter a second roll score', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    expect(game.currentGame[1]).toEqual([7,2]);
  });

  it('raises an error if second score plus first score is above 10', function() {
    bowlingFrame.rollOne(7);
    expect(function() { bowlingFrame.rollTwo(4); }).toThrow(new Error('Roll must be between 0 and 3'));
  });

  it('raises a nice error on second roll if first roll is a strike', function() {
    bowlingFrame.rollOne(10);
    expect(function() { bowlingFrame.rollTwo(1); }).toThrow(new Error('You got a strike in this frame, well done!'));
  });

  it('raises error if you submit same roll twice', function() {
    bowlingFrame.rollOne(7);
    expect(function() { bowlingFrame.rollOne(2); }).toThrow(new Error('You already have a score here'));
  });

  it('raises error if frames are not submitted in order', function() {
    expect(function() { bowlingFrameThree = new BowlingFrame(3); }).toThrow(new Error('You must add to frames in correct order'));
  });

  it('raises error if first roll submitted is not frame one, roll one', function() {
    expect(function() { bowlingFrame.rollTwo(7); }).toThrow(new Error('You must add to frame one, roll one first'));
  });

  it('allows a bonus roll if first two rolls are larger or equal to 10', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      bowlingFrameThree = new BowlingFrame(3);
      bowlingFrameThree.rollOne(10);
      bowlingFrameFour = new BowlingFrame(4);
      bowlingFrameFour.rollOne(10);
      bowlingFrameFive = new BowlingFrame(5);
      bowlingFrameFive.rollOne(10);
      bowlingFrameSix = new BowlingFrame(6);
      bowlingFrameSix.rollOne(10);
      bowlingFrameSeven = new BowlingFrame(7);
      bowlingFrameSeven.rollOne(10);
      bowlingFrameEight = new BowlingFrame(8);
      bowlingFrameEight.rollOne(10);
      bowlingFrameNine = new BowlingFrame(9);
      bowlingFrameNine.rollOne(10);
      bowlingFrameTen = new BowlingFrame(10);
      bowlingFrameTen.rollOne(1);
      bowlingFrameTen.rollTwo(9);
      bowlingFrameTen.bonusRoll(4);
      expect(game.currentGame[10]).toEqual([1,9,4]);
    });

  it('should raise an error if you are unable to use the bonus roll', function() {
    expect(function() { bowlingFrame.bonusRoll(7); }).toThrow(new Error('You cannot use the bonus roll'));
  });

});
