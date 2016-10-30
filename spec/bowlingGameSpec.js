'use strict';

describe("BowlingGame", function() {
  var BowlingGame = require('../public/js/BowlingGame');
  var BowlingFrame = require('../public/js/BowlingFrame');
  var game;

  beforeEach(function( ) {
    var frame1 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame2 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame3 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame4 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame5 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame6 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame7 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame8 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame9 = jasmine.createSpyObj('BowlingFrame',['addScore']);
    var frame10 = jasmine.createSpyObj('BowlingFrame',['addScore']);

  });

  describe("starting a game", function(){

    it('should start with a total score of 0', function(){
      expect(game.totalScore).toEqual(0);
    });

    it("should know that it's on the first frame", function(){
      expect(game.currentFrame).toEqual(game.frame_one);
    });

    it("should start with an array of 10 frames", function(){
      expect(game.framesArray.length).toEqual(10);
    });

  });

  describe("starting a frame", function(){

    it('should be able to add a score of 3 to frame one', function(){
      game.takeShot(3);
      expect()

    });

    it('should be able to add a score of 10', function(){

    });

    it('', function(){

    });

  });

});

  //
  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);
  //
  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });
  //
  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });
  //
  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();
  //
  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });
  //
  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });
  //
  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');
  //
  //   player.play(song);
  //   player.makeFavorite();
  //
  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });
  //
  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);
  //
  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
  // });
