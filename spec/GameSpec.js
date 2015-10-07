describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start with zero points", function() {
    expect(game.score).toEqual(0);
  });

  it("should be able to increase the score when ball is rolled", function() {
    game.rollBall(4);
    expect(game.score).toEqual(4);
  });

  it("should change frame after two rolls", function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.frameNumber).toEqual(2);
  });

  it("should be able to tell how many pins were hit on each ball", function() {
    game.rollBall(5);
    expect(game.scoreBoard[1][0]).toEqual(5);
  });

  it("frame changes after a strike", function() {
    game.rollBall(10);
    expect(game.frameNumber).toEqual(2);
  });

  it("doubles score on next throw after a strike", function() {
    game.rollBall(10);
    game.rollBall(5);
    expect(game.scoreBoard[2][0]).toEqual(10);
  });

  it("doubles score if multiple stikes in a row", function() {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(5);
    expect(game.scoreBoard[3][0]).toEqual(10);
  });

  it("can double score on next roll if spare", function() {
    game.rollBall(6);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.scoreBoard[2][0]).toEqual(8);
  });

  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });
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
});
