'use strict';

describe('Features', function() {

  var game;

  beforeEach( function() {
    game = new Game();
  });

  // As a bowler,
  // so that I can record my score
  // I would like to input my score after each roll
  it('User can record score after each roll', function() {
    game.roll(1);
    expect(game.getScore()).toEqual(1);
  });


});
