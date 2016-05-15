'use strict';

describe("Game", function(){
var game;

  beforeEach(function(){
    game = new Game();
  });

  it('opens with a starting score of zero', function() {
    expect(new Game()._score).toEqual(0);
  });

  it('opens with empty frames', function() {
    expect(new Game()._frames).toEqual([]);
  });

 
});
