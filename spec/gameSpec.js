'use strict';

describe("Game", function(){
  var game;
  var frame = jasmine.createSpyObj('frame', ['isEmpty', 'true', 'false'])

  beforeEach(function(){
    game = new Game();
    frame.isEmpty.and.returnValue(true);
    game.addFrames(frame);
  });

  it('opens with a starting score of zero', function() {
    expect(new Game()._score).toEqual(0);
  });

  it('opens with empty frames', function() {
    expect(new Game()._frames).toEqual([]);
  });

  it('has a maximum of ten frames', function() {
    expect(game._frames.length).toEqual(10);
  });

 
});
