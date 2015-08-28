describe('Bowling Frame', function() {

  beforeEach(function() {
    game = new BowlingGame();
    bowlingFrame = new BowlingFrame(1);
  });

  it('allows you to enter your first bowling score', function() {
    bowlingFrame.rollOne(7);
    expect(game.newGame[1]).toEqual([7,null]);
  });

  it('raises an error if score is above 10', function() {
    expect( function() { bowlingFrame.rollOne(11); } ).toThrow(new Error("Roll must be between 0 and 10"));
  });

  it('raises an error if score is below 0', function() {
    expect( function() { bowlingFrame.rollOne(-1); } ).toThrow(new Error("Roll must be between 0 and 10"));
  });

  it('allows you to enter your second bowling score', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    expect(game.newGame[1]).toEqual([7,2]);
  });

  it('raises an error if second score plus first score is above 10', function() {
    bowlingFrame.rollOne(7);
    expect( function() { bowlingFrame.rollTwo(4); } ).toThrow(new Error("Roll must be between 0 and 3"));
  });

  it('raises a nice error on second roll if first roll is a strike', function() {
    bowlingFrame.rollOne(10);
    expect( function() { bowlingFrame.rollTwo(1); } ).toThrow(new Error("You got a strike in this frame, well done!"));
  });

  it('raises error if you submit same roll twice', function() {
    bowlingFrame.rollOne(7);
    expect(function() { bowlingFrame.rollOne(2); } ).toThrow(new Error("You already have a score here"));
  });

  it('raises error if frames are not submitted in order', function() {
    console.log(game.newGame[2]);
    expect(function() { bowlingFrameThree = new BowlingFrame(3) } ).toThrow(new Error("You must add to frames in order"));
  });

  it('raises error if first roll submitted is not frame one, roll one', function() {
    expect(function() { bowlingFrame.rollTwo(7); } ).toThrow(new Error("You must add to frame one, roll one first"));
  });

});