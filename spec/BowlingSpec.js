'use strict';

describe('Bowling', function(){

  let game;
  let i;

  beforeEach(function(){
    game = new Bowling();
    i = 0;
  });

  it('can roll a gutter game', function(){
    while(i < 20){
      game.hit(0);
      i++;
    }
    expect(game.score()).toEqual(0);
  })

});