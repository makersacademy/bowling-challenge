"use strict"

describe('Game', function() {
  let game;
  let frameClass;
  let frame;
  
  beforeEach(function() {
    frame = jasmine.createSpyObj('frame', ['update']);
    game = new Game();
    // To isolate unit tests:
    game._frames = [];
    for(let i = 1; i <=NUMBER_OF_FRAMES; i++) {
      game._frames.push(frame);
    }
    // game._frames has been cleared of Frame objects and replaced with spy objects
  });

  describe('bowl', function() {
    it('updates the the current frame', function() {
      game.bowl(6);
      expect(game._frames[game._frameCounter].update).toHaveBeenCalledWith(6);  
    });
  });
});