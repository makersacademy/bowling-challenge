'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
  game = new Game();
  frame = jasmine.createSpyObj('frame',['rollBallOne', 'rollBallTwo', 'calcScore']);
  });

  it('has an empty array of scores at the beginning', function(){
    game.addFrame(frame)
    expect(game.totalsOfFrames()).toEqual([frame]);
  });

  it('can return the total score of the player', function(){
    game.addFrame(frame)
    spyOn(Math,'random').and.returnValue(10);
    frame.calcScore.and.returnValue(10);
    expect(game.calcTotal()).toEqual(10);
  });

  it('doesnt not allow to have more than 10 frames - game is over', function(){
    for (var i=0; i<11; i++) {
      game.addFrame(frame);
    }
    expect(function(){game.addFrame(frame);}).toThrowError('The game is over - no more frames left');
  });



});
