'use strict';

describe('Game', function(){
  var game;
  game = new Game();

  it('throws an error when the nr of rolls > 21', function(){
    var rollsList = [3,0,10,10,7,3,5,3,10,8,0,6,0,3,7,10,10,10,10,8,2,5,3]
    expect(function(){ game.updateRolls(rollsList); }).toThrowError('cannot have more than 21 rolls in a game');
  });
});
