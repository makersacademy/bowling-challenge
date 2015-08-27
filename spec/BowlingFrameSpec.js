describe('Bowling Frame', function() {

  beforeEach(function() {
    bowlingFrame = new BowlingFrame('one');
  });

  it('allows you to enter your first bowling score', function() {
    bowlingFrame.rollOne(7);
    expect(bowlingFrame.totalFrame).toEqual({one: [7,0]});
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
    expect(bowlingFrame.totalFrame).toEqual({one: [7,2]});
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
    console.log(game.newGame);
    expect(game.newGame).toEqual({one: [7,2]});
  });

});