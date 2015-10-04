describe('Game', function() {
  var game;
  var pinsDown;

  beforeEach(function() {
    game = new Game();
    game.pinsHit = 5;
  });

  it("should know the current frame number", function() {
    expect(game.frameNumber).toEqual(1);
  });  

  it('should know the total score', function() {
    expect(game.totalScore).toEqual(0);
  });

  it('the score should increase by the number of pins hit when the ball is thrown', function() {
    game.throwBall();
    expect(game.totalScore).toEqual(game.pinsHit);
  });

  it('should start on the first throw of a frame', function() {
    expect(game.firstThrow).toEqual(true);
  });

  it('should change to the second throw of a frame after the first', function() {
    game.throwBall();
    expect(game.firstThrow).toEqual(false);
  });

  it('should change frames after every second throw', function() {
    game.throwBall();
    game.throwBall();
    expect(game.frameNumber).toEqual(2);
  });

  it('should know what scores were made in each frame', function() {
    game.throwBall();
    game.throwBall();
    game.throwBall();
    expect(game.scoreCard[1]).toEqual([game.pinsHit, game.pinsHit]);
  });

  it('should know when it throws a spare', function() {
    game.throwBall();
    game.throwBall();
    expect(game.lastFrame).toEqual('/');
  });

  it('should know when it throws a strike', function() {
    game.pinsHit = 10;
    game.throwBall;
    expect(game.lastFrame).toEqual('X');
  });
});

  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });

