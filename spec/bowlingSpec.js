'use strict';

describe('Bowling', function() {

  var game;

  beforeEach(function() {
    game = new Bowling();
  });


  describe('When starting a new game, it initializes',function(){

    it('roll per frame to 2', function() {
     expect(game.ROLL_PER_FRAME).toEqual(2);
    });

    it('total frames to 10', function() {
     expect(game.TOTAL_FRAMES).toEqual(10);
    });

    it('knocked pins to 0', function() {
     expect(game.knockedPin).toEqual(0);
    });

    it('frame count to 0', function() {
     expect(game.frameCount).toEqual(0);
    });

    it('roll to 0', function() {
     expect(game.roll).toEqual(0);
    });

    it('bonus to 0', function() {
     expect(game.bonus).toEqual(0);
    });

    it('score to 0', function() {
     expect(game.score).toEqual(0);
    });

    it('pin to 10', function() {
     expect(game.pin).toEqual(10);
    });
  });
});
