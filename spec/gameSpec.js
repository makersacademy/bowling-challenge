'use strict';

describe('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at zero', function() {
    expect(game.score).toEqual(0)
  });

  it('increases in score with point_increase()', function() {
    game.point_increase();
    expect(game.score).toEqual(1)
  });

  it('calculates correctly the score', function() {
    game.updateRolls([3,0,10,10,7,3,5,3,10,8,0,6,0,3,7,10,10,10]);
    game.score();
    expect(game.score()).toEqual(155);
  });

  it('throws an error when the nr of rolls > 21', function(){
    expect(function(){ game.updateRolls([3 ,0, 10, 10, 7, 3, 5, 3, 10, 8, 0, 6, 0, 3, 7, 10, 10, 10, 10, 8, 2, 5 ,3]); }).toThrowError('cannot have more than 21 rolls in a game');
  });


});
