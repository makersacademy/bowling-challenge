// var Game = require('../src/Game');

describe("Game", function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpy('frame');
  });


  it('sets frame scores to an empty array', function(){
    expect(game.frameScores).toEqual([]);
  });


  it('keeps count of frames played', function(){
    game.playFrame();
    expect(game.frameNumber).toEqual(1);
  });

  // it('creates a new frame object per frame', function(){
  //   game.playFrame();
  //   expect(game.playFrame.frame).toEqual(frame);
  // });

});
