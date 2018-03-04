'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('starts with an empty array', function(){
    expect(game.frames).toEqual([]);
  });

  describe('.addFrame', function(){
    it('adds the frame to the frames array', function(){
      game.addFrame(frame)
      expect(game.frames).toContain(frame)
    })
  })

  describe('.roll', function(){
    it('creates a new frame with parameters for each roll', function(){
      game.roll(6, 3)
      expect(game.frames[0].roll_one).toEqual(6)

    });
  });

});
