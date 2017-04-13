console.log('gameSpec file has been required correctly')

'use strict';

describe('Game', function (){

  var game;
  var frame;

  beforeEach(function (){
    game = new Game();
    frame = new Frame();
  });

  describe('Should be initialized', function () {
    it('with frames being empty', function (){
      expect(game.frames).toEqual([]);
    });
  });

  it('can increase frames', function (){
    game.addFrame(frame)
    expect(game.frames.length).toEqual(1);
  });

  // describe('Player score', function (){
  //   it('A player can roll', function (){
  //     expect(game.roll()).toEq
  //   });
  // });

});
