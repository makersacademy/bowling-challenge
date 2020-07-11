'use strict';
describe('Game', function() {
  var newGame;

  beforeEach(function() {
    newGame = new Game();
  })

  it('has a maximum of 10 points per roll', function(){
    expect(newGame.MAXIMUM_POINTS).toEqual(10);
  });

  it('has 10 frames', function() {
    expect(newGame._frames).toEqual([]);
  });


  it('calculates a spare', function() {
    expect(newGame.isSpare()).toEqual(10)
  })

  it('calculates a strike', function() {
    expect(newGame.isStrike()).toEqual(10)
  })

});
