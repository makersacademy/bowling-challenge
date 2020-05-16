'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('score starts at 0', function() {
    expect(game.totalscore).toEqual(0)
  });

  it ('can add 5 to the total score', function() {
    game.addscore(5);
    expect(game.totalscore).toEqual(5)
  });


});
