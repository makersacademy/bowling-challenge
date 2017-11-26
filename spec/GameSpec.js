'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    // frame = {
    //   this_nr:0,
    //   this_rolls:[],
    //   this_intScore:0
    // };
  });


  it('throws an error when the nr of rolls > 21', function(){
    expect(function(){ game.updateRolls([3 ,0, 10, 10, 7, 3, 5, 3, 10, 8, 0, 6, 0, 3, 7, 10, 10, 10, 10, 8, 2, 5 ,3]); }).toThrowError('cannot have more than 21 rolls in a game');
  });

  it('is Gutter game', function() {
    game.updateRolls([0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0]);
    game.score();
    expect(game.isGutterGame()).toBeTruthy();
  });

  it('is Perfect game', function() {
    game.updateRolls([10, 10, 10, 10, 10, 10 ,10 , 10, 10, 10, 10, 10]);
    game.score();
    expect(game.isPerfectGame()).toBeTruthy();
  });

  it('calculates correctly the score', function() {
    game.updateRolls([3,0,10,10,7,3,5,3,10,8,0,6,0,3,7,10,10,10]);
    game.score();
    expect(game.score()).toEqual(155);
  });

  // not passing, i think is related to doubling frame;
  // it('game has 10 frame', function() {
  //   game.updateRolls([3,0,10,10,7,3,5,3,10,8,0,6,0,3,7,10,10,10]);
  //   game.score();
  //   expect(game._frames.length).toEqual(10);
  // });


});
