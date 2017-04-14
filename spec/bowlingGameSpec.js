console.log('gameSpec file has been required correctly')

'use strict';

describe('BowlingGame', function (){

  var game;
  var frame;

  beforeEach(function (){
    game = new BowlingGame();
    frame = new Frame(); //jasmine.createSpy('frame');
  });

  describe('Should be initialized', function () {
    it('with frames being empty', function (){
      expect(game.frames).toEqual([]);
    });
  });

  describe('Bowling a single frame', function () {
    beforeEach(function (){
      game.addFrame(frame);
    });

    it('can increase frames', function (){
      expect(game.frames.length).toEqual(1);
      expect(game.frames).toContain(frame);
    });

    describe('Player score', function (){
      it('A player can bowl a random number between 0-10', function (){
        expect(game.bowl(frame) >= 1 && game.bowl(frame) <= 10).toBeTruthy();
      });

    });
  });

  // describe('Current bowl', function(){
  //   it('should increment frames by 1', function(){
  //
  //   });
  // });

});
