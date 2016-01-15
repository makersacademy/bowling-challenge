describe('The Final Frame', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  it ('Gets the score right with a frame less than 10', function() {
    game.bowlA(8);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(7);
    game.bowlA(1);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(7);
    game.bowlA(2);
    game.bowlA(7);
    game.bowlA(2);
    expect(game.seeFrameScores()[9]).toEqual([9])
  });

  it ('Gets the score right with a spare followed normal ball', function() {
    game.bowlA(8);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(7);
    game.bowlA(1);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(7);
    game.bowlA(2);
    game.bowlA(7);
    game.bowlA(3);
    game.bowlA(5);
    expect(game.seeFrameScores()[9]).toEqual([15])
  });

  it ('Gets the score right with a strike followed by 2 normal balls', function() {
    game.bowlA(8);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(7);
    game.bowlA(1);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(7);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(3);
    game.bowlA(5);
    expect(game.seeFrameScores()[9]).toEqual([18])
  });

  it ('Gets the score right with a strike followed by 2 strikes', function() {
    game.bowlA(8);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(7);
    game.bowlA(1);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(9);
    game.bowlA(1);
    game.bowlA(7);
    game.bowlA(2);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    expect(game.seeFrameScores()[9]).toEqual([30])
  });

  it ('Correctly scores a perfect game', function() {
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
    game.bowlA(10);
  expect(game.totalScore()).toEqual(300)
  });

});
