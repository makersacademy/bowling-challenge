'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
  game = new Game();
  frame = jasmine.createSpyObj('frame',['addFrame']);
  });

  it('has an empty array of scores at the beginning', function(){
    expect(game.totalsOfFrames()).toEqual([]);
  });

  it('doesnt not allow to have more than 10 frames - game is over', function(){
    for (var i=0; i<11; i++) {
      game.addFrame(frame);
    }
    expect(function(){game.addFrame(frame);}).toThrowError('The game is over - no more frames left');
  });

});
