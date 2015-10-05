describe("Game", function() {
  var game;
  // var song;

  beforeEach(function() {
    game = new Game();
    // song = new Song();
  });

  it("When I start the game i have score zero", function() {
    expect(game.score).toEqual(0);
  });

  it("When I roll the ball and hits some pins I get some score", function() {
    game.rollBall(5);
    expect(game.score).toEqual(5);
  });

  it("If some pins were remained, we expect the second throw", function(){
    game.rollBall(5);
    expect(game.firstThrow).toEqual(false);
  });


  it("The frame should change after the second throw if the first wasn't a strike", function(){
    game.rollBall(5);
    game.rollBall(5);
    expect(game.frameNumber).toEqual(2);
  });

  it("it remembers which score were made each frame", function(){
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.scoreCard[1]).toEqual([5, 5]);
  });

  it("It knows when the last frame is a spare", function(){
    game.rollBall(5);
    game.rollBall(5);
    game.isSpare();
    expect(game.lastFrame).toEqual("Spare!");
  });

  it("sets the last frame to an empty string after the last frame was a spare", function() {
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(2);
    game.rollBall(2);
    expect(game.lastFrame).toEqual("");
  });

  it("adds spare bonus points to the appropriate frame in the bonus array", function() {
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.bonusPoints[3]).toEqual(5);
  });

  it("It knows when we hit a strike", function(){
    game.rollBall(10);
    expect(game.lastFrame).toEqual("Strike!");
  });

  it("It changes frame when you roll a strike", function(){
     game.rollBall(10);
     expect(game.frameNumber).toEqual(2);
  });

  it("It adds ten points to the score card when you roll strike", function() {
    game.rollBall(10);
    expect(game.scoreCard[1]).toEqual([10]);
  });

  it("adds bonus points to the appropriate frame in the bonus array when you roll a strike", function() {
    game.rollBall(10);
    game.rollBall(3);
    expect(game.bonusPoints[2]).toEqual(3);
  });
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
});
