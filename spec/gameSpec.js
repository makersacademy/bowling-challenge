console.log('gameSpec file has been required correctly')

'use strict';

describe('Game', function () {

  var game;
  var frame;

  beforeEach(function () {
    game = new Game();
    frame = new Frame(); //jasmine.createSpy('frame');
  });

  describe('Should be initialized', function () {
    it('with frames being empty', function () {
      expect(game.frames).toEqual([]);
    });
  });

  it('should return current frame', function () {
    game.addFrame(frame);
    expect(game.getCurrentFrame()).toEqual(frame)
  });

  describe('Bowling a single frame', function () {
    it('can increase frames', function () {
      game.addFrame(frame);
      expect(game.frames.length).toEqual(1);
      expect(game.frames).toContain(frame);
    });
  });

  // describe('A 10 frame game', function (){
  //   it('should throw error if 10 frames have been bowled', function (){
  //     spyOn(game, 'currentFrame').and.returnValue(11);
  //     expect(function (){game.bowl(frame);}).toThrowError("Game over!")
  //   });
  // });

});
