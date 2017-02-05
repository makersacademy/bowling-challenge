// 'use strict';

describe('bowling', function(){
  var bowling;
  var player;
  var pins;

  beforeEach(function(){
    player = new Player();
    pins = new Pins();
    bowling = new Bowling(player, pins);
  })

  describe('#initialize', function() {
    it ('game initializes with frame = 0', function(){
      expect(bowling.frame).toEqual(0);
    })
  })

  describe('Game play', function() {
    it ('test', function(){
      bowling.play(10);
      bowling.play(7);
      bowling.play(3);
      bowling.play(10);
      // bowling.player.displayScore();
      // bowling.play(10);
      // // bowling.player.displayScore();
      // bowling.play(10);
      // bowling.play(10);
      bowling.play(2);
      bowling.play(8);
      bowling.player.displayScoreCard();
      bowling.player.displayScore();
      expect(bowling.frame).toEqual(0);
    })
  })

})
