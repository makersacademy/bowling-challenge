describe('bowling game logic', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  it('starts with score = 0', function() {
    expect(game.score).toEqual(0);
  });

  it('has 10 frames', function() {
    expect(game.allFrames.length).toEqual(10);
  });

  it('can roll a ball', function() {
    game.roll(2);
    expect(game.score).toEqual(2);
  });

  it('can only take rolls that are 10 or less', function() {
    expect(function() { game.roll(11) } ).toThrow(new Error ("Illegal throw"));
    expect(game.score).toEqual(0);
  })

  it('a roll in input into the frame scores', function() {
    game.roll(5);
    game.roll(4);
    expect(game.allRolls[0]).toEqual([5,4]);
  });

  it('can only roll twice before moving onto another frame', function() {
    game.roll(2);
    game.roll(2);
    game.roll(2);
    game.roll(2);
    expect(game.allRolls[0]).toEqual([2,2]);
    expect(game.allRolls[1]).toEqual([2,2]);
    expect(game.score).toEqual(8);
  });

  it('only rolls once if a strike is scored', function() {
  game.roll(10);
  game.roll(5);
  expect(game.allFrames[0]).toEqual(10);
  expect(game.allFrames[1]).toEqual(5);
  });

  it('can roll a strike', function() {
    game.roll(10);
    expect(game.allRolls[0]).toEqual([10,0]);
    expect(game.allFrames[0]).toEqual(10);
  })

  it('can calculate the score for one frame', function() {
    game.roll(2);
    game.roll(6);
    expect(game.score).toEqual(8);
  });

  it('can calculate the score for more than one frame', function() {
    game.roll(2);
    game.roll(6);
    game.roll(2);
    game.roll(6);
    expect(game.allFrames[0]).toEqual(8);
    expect(game.allFrames[1]).toEqual(8);
    expect(game.score).toEqual(16);
  });
  //
  // it('can give bonus points for strikes', function() {
  //   game.roll(10);
  //   game.roll(3);
  //   game.roll(2);
  //   expect(game.allFrames[0]).toEqual(15);
  //   expect(game.allFrames[1]).toEqual(5);
  //   expect(game.score).toEqual(20);
  // });
  //
  // it('can give bonus points for spares', function() {
  //   game.roll(7);
  //   game.roll(3);
  //   game.roll(4);
  //   expect(game.allFrames[0]).toEqual(14);
  //   expect(game.allFrames[1]).toEqual(4);
  //   expect(game.score).toEqual(18);
  // });
  //
  // it('gives bonus points correctly when two strikes have been scored', function() {
  //   game.roll(10);
  //   game.roll(10);
  //   game.roll(5);
  //   game.roll(4);
  //   expect(game.score).toEqual(53);
  // });

});
