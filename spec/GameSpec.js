'use strict';

describe("Roll",function(){
  var roll;
  beforeEach(function(){
    roll = new Roll();
  });

  describe("make a roll",function(){
    it("should add a new roll",function(){
      roll.addRoll(9);
      roll.addRoll(1);
      expect(roll.roll.length).toEqual(2);
    })
  });

  describe("cannot exceed 2 rolls",function(){
    it("throws an error if there are more that 2 rolls in a frame",function(){
      roll.addRoll(2);
      roll.addRoll(1);
      expect(function(){roll.addRoll(4);}).toThrowError('There are a maximum of 2 rolls per frame');
    });
  });

  describe("make a second roll in a frame",function(){
    it("throws an error if the score for 2 rolls in a frame > 10", function(){
      roll.addRoll(2);
      expect(function(){roll.addRoll(9);}).toThrowError("Score for 2 throws cannot exceed 10");
    });
  });

});


describe("Game", function(){
  var game;
  var roll1;
  var roll2;
  beforeEach(function(){
    game = new Game();

  });

  describe("start a new game",function(){
    it("should start a new game", function(){
      expect(game instanceof Game).toEqual(true);
    });
  });

  describe("complete a frame",function(){
    it("should add a new frame",function(){
      game.addFrame("testgame1");
      game.addFrame("testgame2");
      expect(game.frames.length).toEqual(2);
    });
  });

  describe("get frame roll scores",function(){
    it("should return frame scores",function(){
      roll1 = new Roll();
      roll1.addRoll(7);
      roll1.addRoll(2);
      game.addFrame(roll1);
      roll2 = new Roll();
      roll2.addRoll(5);
      roll2.addRoll(2);
      game.addFrame(roll2);
      expect(game.showFrame(2)).toEqual(roll2);
    })
  });

})


// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
