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

  it('calculates a perfect game', function() {
    for(var i = 0; i < 20; i++) {
    newGame.roll(15)
    }
    expect(newGame.score()).toEqual(300)
  })

  it('calculates a gutter game', function() {
    for(var i = 0; i < 20; i++) {
    newGame.roll(0);
    }
    expect(newGame.score()).toEqual(0);
  })

  it('calculates a spare', function() {
    for(var i = 0; i < 20; i++) {
    newGame.roll([5,5]);
  }
    expect(newGame.isSpare()).toEqual(10);
  })


});
