// var Game = require('../src/Game');

describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('sets default frame to 1', function(){
    expect(game.frameNumber).toEqual(1);
  });

  it('sets default totalScore to 0', function(){
    expect(game.totalScore).toEqual(0);
  });



});
