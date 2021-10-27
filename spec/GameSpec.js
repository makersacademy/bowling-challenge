"use strict";

describe('Game', function() {
  let game, frame, frame_1;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('Frame',['frame_Score', 'addRolls', 'isStrike'])
    frame_1 = jasmine.createSpyObj('Frame',['frame_Score', 'addRolls', 'isStrike'])
  })

  describe('#NextFrame', function() {
    it('goes to the next frame after a strike', function(){
      game.run(10);
      expect(game.frame_index).toEqual(1);
    })

    it('does not go to the next frame until finished', function(){
      game.run(4);
      expect(game.frame_index).toEqual(0);
    })

    it('goes to the next frame after frame finishes', function(){
      game.run(3);
      game.run(3);
      expect(game.frame_index).toEqual(1);
    })
  })

  describe('#AddStrikePoints', function() {
    it('adds strike points to the previous frame', function() {
      game.run(10);
      game.run(3);
      game.run(3);
      expect(game.frameBeforeLast().frame_score).toEqual(16);
    })

    it('does not add strike points to the previous frame', function() {
      game.run(5);
      game.run(2);
      game.run(3);
      game.run(4);
      expect(game.frameBeforeLast().frame_score).toEqual(7);
    })
  })

  describe('#AddSparePoints', function() {
    it('adds spare points to the previous frame', function() {
      game.run(6);
      game.run(4);
      game.run(3);
      game.run(3);
      expect(game.frameBeforeLast().frame_score).toEqual(13);
    })
    it('does not add spare points to the previous frame', function() {
      game.run(5);
      game.run(2);
      game.run(3);
      game.run(4);
      expect(game.frameBeforeLast().frame_score).toEqual(7);
    })
  })

  describe('#total_score', function() {
    it('adds all the frame scores', function(){
      for(var i = 0; i < 20; i++){
        game.run(3);
      }
      expect(game.total_score()).toEqual(60);
    })
  })
});
