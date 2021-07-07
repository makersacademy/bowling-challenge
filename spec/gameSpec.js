'use strict';

describe(`Game`, function(){

  let game;
  let player;

  beforeEach(function(){
    player = new Player(`Dave`);
    game = new Game(player);
    
  });

  it(`has a player`, function(){
    expect(game.player).toEqual(player); 
  });

});