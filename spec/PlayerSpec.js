'use strict';

describe("Player", function() {
  var player;
  var game;

  beforeEach(function() {
    player = new Player();
    game = new Game();
  });

  it("should be able to play bowling", function() {
    player.play(game);
    expect(player.currentGame).toEqual(game);
    expect(player.isPlaying).toEqual(true);
  });

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
  it("sees current score after made roll", function() {
    spyOn(game, 'getCurrentScore');

    player.play(game);
    player.makeRoll();
    expect(game.getCurrentScore).toHaveBeenCalledWith();
  });
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
});
