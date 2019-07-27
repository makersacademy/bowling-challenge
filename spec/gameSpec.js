'use strict';

describe ('game', function(){

  var game;
  beforeEach (function(){
    game = new Game;
  });

  it ('responds to creating new object', function(){

    var new_game = new Game;
    expect(new_game).toEqual(jasmine.any(Game));

  })


})
