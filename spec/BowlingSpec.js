'use strict';

describe('Bowling', function(){

  let game;

  let rollGame = function(pins, rolls){
    for (let i = 0; i < rolls; i++) {
      game.hit(pins); 
    }
  };

  beforeEach(function(){
    game = new Bowling();
  });

  it('can roll a gutter game', function(){
    rollGame(0, 20);
      game.hit(0);
    expect(game.score()).toEqual(0);
  });

  it('can roll an all 4 game', function(){
    rollGame(4, 20);
    expect(game.score()).toEqual(80);
  });

  it('can roll a spare', function (){
    game.hit(5);
    game.hit(5);
    game.hit(3);
    rollGame(0, 17); 
    expect(game.score()).toEqual(16);
  });

  it('can roll a strike', function (){
    game.hit(10);
    game.hit(4);
    game.hit(3);
    rollGame(0, 16);
    expect(game.score()).toEqual(24);
  });

  it ('can roll a perfect game', function (){
    rollGame(10, 12);
    expect(game.score()).toEqual(300);
  });

});