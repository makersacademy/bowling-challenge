// Tests should be organized under appropriate describe blocks, with descriptive
// titles and should be DRY. They are unDry if they are repeating themselves in
// the test in a way that could be extracted). Can you understand exactly how to
// use the solution solely by reading the tests?

// Many solutions rely on a 'virtuous consumer' - i.e. they do not validate inputs
// or check for out of range values etc. In the bowling challenge this includes
// checking for odd corner cases such as the gutter game and the perfect game, and
// odd combinations of strikes and spares. But also defending against non-numeric
// or meaningless values being passed in to the engine.

'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with 10 pins', function(){
    expect(game.getCurrentPinsStanding()).toEqual(10);
  });

  it('starts player with a score of 0', function(){
    expect(game.getCurrentPlayerScore()).toEqual(0);
  });

  it('starts player with a bonus of 0', function(){
    expect(game.getCurrentBonus()).toEqual(0);
  });
});
