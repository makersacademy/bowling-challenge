'use strict';

describe('Bowling', function(){
  var game;
  beforeEach(function(){
    game = new Game;
  });
  it('gutter game', function(){
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });
  it('rolls all ones', function(){
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });
  it('rolls a spare', function(){
    rollSpare();
    rollMany(18, 1);
    expect(game.score()).toEqual(29);
  });
  it('rolls a strike', function(){
    rollStrike();
    rollMany(18, 1);
    expect(game.score()).toEqual(30);
  });
  it('perfect game', function(){
    rollMany(12, 10);
    expect(game.score()).toEqual(300);
  });
  function rollMany(rolls, pins){
    for(var i = 0; i < rolls; i++){
      game.roll(pins)
    }
  };
  function rollSpare(){
    game.roll(5);
    game.roll(5);
  };
  function rollStrike(){
    game.roll(10);
  };
});
