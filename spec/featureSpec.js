'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame();
  })

  describe('A game starts with a new frame', function() {
    exepect(game.frames[0]).toEqual (frame);
  })



})