'use strict';

describe('Features', function() {

  var game;

  beforeEach( function() {
    game = new Game();
  });

  // As a bowler,
  // so that I can record my score
  // I would like to input my score after each throw
  it('User can record score after each throw', function() {
    game.throw(1);
    expect(game.score()).toEqual(1);
  });


});
