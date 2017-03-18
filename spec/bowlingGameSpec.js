'use strict';
describe('The Bowling Game', function(){
  var game;
  beforeEach(function(){
    game = new BowlingGame();
  });
  
  it('can roll a gutter game', function(){
    for(var i =0;i<20;i++){
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('can roll all ones', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });





}); //  The Bowling Game describe
