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

    it('roll count to 0', function() {
     expect(game.rollCount).toEqual(0);
    });

    it('bonus to 0', function() {
     expect(game.bonus).toEqual(0);
    });

    it('score to 0', function() {
     expect(game.score).toEqual(0);
    });

    it('available pins to 10', function() {
     expect(game.availablePin).toEqual(10);
    });

    it('blow status',function(){
      expect(game.rollStatus).toBe(false);
    });
  });


  describe('When starting a new frame', function(){
    beforeEach(function(){
      game.setNewFrame();
    });

    it('updates the frames count',function(){
      expect(game.getFrameCount()).toEqual(1);
    });

    it('resets the rolls count',function(){
      expect(game.getRollCount()).toEqual(0);
    });
  });


  describe('Updates after rolling a ball', function(){
    beforeEach(function(){
      game.roll();
      game.updateAfterRolling(7);
    });

    it('updates the rolling status',function(){
      expect(game.isRoll()).toBe(true);
    });

    it('updates the rolls count',function(){
      expect(game.rollCount).toEqual(1);
    });

    it('updates available pins',function(){
      expect(game.getAvailablePin()).toEqual(3);
    });
  });



  // describe('When Calculating score:', function(){
  //   beforeEach(function(){
  //     game.setNewFrame();
  //     game.roll();
  //     game.updateAfterRolling(7);
  //   });
  //
  //   describe('No bonus case', function(){
  //     it('Adds knocked pins of the current frame to the score', function(){
  //       roll();
  //     });
  //   });
  //
  // });


  // describe('When a frame is completed', function(){
  //   beforeEach(function(){
  //     game.bowl();
  //   });
  //
  //   it('updates the bowlign status',function(){
  //     expect(game.isBowl()).toBe(true);
  //   });
  // });



});
