'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('should have a player', function() {
    expect(game._player).toEqual('Ollie');
  });

  it('gets the total score', function() {
    expect(game.getTotalScore()).toEqual(0);
  });


  it('gets the score sheet', function() {
    expect(game.getScoreSheet()).toEqual([]);
  });


  it('knows the current frame and roll', function() {
    expect(game._frameAndRoll).toEqual([1,1]);
  });

  it('Adds the frame\'s first roll to the total score', function() {
    game.roll(9);
    expect(game.getTotalScore()).toEqual(9);
  });

  it('Adds the frame\'s second roll to the total score', function() {
    game._totalScore = 3;
    game._frameAndRoll = [1, 2];
    game.roll(7);
    expect(game.getTotalScore()).toEqual(10);
  });

  it('records the first roll\'s score on the score sheet', function() {
    game.roll(9);
    expect(game._scoreSheet).toEqual([9]);
  });

  it('records the second roll\'s score on the score sheet', function() {
    game._scoreSheet = [3];
    //  game._frameAndRoll = [1, 2];
    game.roll(7);
    expect(game._scoreSheet).toEqual([3,7]);
    // not sure this test is legit
  });

  it('knows records whether the roll is a strike', function() {
    game.roll(10);
    expect(game._wasStrike).toEqual(true);
  });

  it('knows whether the frame is a spare', function() {
    game.roll(3);
    game.roll(7);
    expect(game._wasSpare).toEqual(true);
  });


});
