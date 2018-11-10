"use strict";

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("Prints Hello World", function() {
    // spyOn(song, 'persistFavoriteStatus');

    expect(bowling.hello).toContain('Hello World');
  });

  it("score starts at zero", function() {
    expect(bowling.returnScore()).toEqual(0);
  });

  it("Strike frame score is 10", function() {
    expect(bowling.strikeFrame).toEqual(10);
  });

  it("adds one to the score", function() {
    bowling.upScore();
    expect(bowling.returnScore()).toEqual(1);
  });

  it("adds one to the frame when a ball is rolled", function() {
    bowling.upScore();
    expect(bowling.returnFrame()).toEqual(2);
  });

  it("adds frame returns to 1 on second bowl", function() {
    bowling.upScore();
    bowling.upScore();
    expect(bowling.returnFrame()).toEqual(1);
  });
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
