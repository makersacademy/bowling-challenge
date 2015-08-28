describe('Bowling Frame', function() {

  beforeEach(function() {
    bowlingFrame = new BowlingFrame(1);
    game = new BowlingGame();
  });

  it('allows you to enter your first bowling score', function() {
    bowlingFrame.rollOne(7);
    expect(bowlingFrame.totalFrame).toEqual({1: [7,0]});
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
    expect(bowlingFrame.totalFrame).toEqual({1: [7,2]});
  });

  it('raises an error if second score plus first score is above 10', function() {
    bowlingFrame.rollOne(7);
    expect( function() { bowlingFrame.rollTwo(4); } ).toThrow(new Error("Roll must be between 0 and 3"));
  });

  it('raises a nice error on second roll if first roll is a strike', function() {
    bowlingFrame.rollOne(10);
    expect( function() { bowlingFrame.rollTwo(1); } ).toThrow(new Error("You got a strike in this frame, well done!"));
  });

  it('allows you to submit completed frame', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    bowlingFrame.submitFrame();
    expect(game.newGame).toEqual({1: [7,2]});
  });

  it('raises error if you submit same frame twice', function() {
    bowlingFrame.submitFrame();
    expect(function() { bowlingFrame.submitFrame(); } ).toThrow(new Error("You cannot submit the same frame twice"));
  });

  it('raises error if frames are not submitted in order', function() {
    bowlingFrame.submitFrame();
    bowlingFrameThree = new BowlingFrame(3);
    expect(function() { bowlingFrameThree.submitFrame(); } ).toThrow(new Error("You must submit frames in order"));
  });

  it('raises error if first frame submitted is not one', function() {
    bowlingFrameTwo = new BowlingFrame(2);
    expect(function() { bowlingFrameTwo.submitFrame(); } ).toThrow(new Error("You must submit frame one first"));
  });

  it('raises error if more than ten frames are added', function() {
    bowlingFrame.submitFrame();
    for (i = 2; i < 11; i ++) {
      bowlingFrame[i] = new BowlingFrame(i);
      bowlingFrame[i].submitFrame();
      console.log(game.newGame)
    };
    bowlingFrameEleven = new BowlingFrame(11);
    expect(function() { bowlingFrameEleven.submitFrame(); } ).toThrow(new Error("You can only submit ten frames"));
  });

});