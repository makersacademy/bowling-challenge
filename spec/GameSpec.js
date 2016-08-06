// var Game = require('../src/Game');

describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('sets default frame to 0', function(){
    expect(game.frameNumber).toEqual(0);
  });

  it('sets default totalScore to 0', function(){
    expect(game.totalScore).toEqual(0);
  });



});
