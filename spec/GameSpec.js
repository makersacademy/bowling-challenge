describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should record the score", function() {
    game.pinsKnockedDown(4);
    expect(game.totScore).toEqual(4);
  });

describe("has frames", function(){

  it("starts a new frame when strike or spare", function() {
    spyOn(game, "_newFrame");
    game.pinsKnockedDown(10);
    expect(game._newFrame).toHaveBeenCalled();
  });

  it("allows the game to have a total of 10 frames maximum", function() {
    for (var i = 0; i < 9; i++) {
      game.pinsKnockedDown(10);
      };
    expect( function(){game.pinsKnockedDown(10);} ).toThrow(new Error("Game Over"));
  });

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
