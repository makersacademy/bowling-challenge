describe("Game", function() {

  beforeEach(function() {
    game = new Game(Frame);
  });

  it("should have default value 10 frames", function() {
    expect(game.frames.length).toEqual(10);
  });

  it("should have initial score 0", function() {
    expect(game.calculateScore()).toEqual(0);
  });

  it("should start at frame 1", function() {
    expect(game.currentFrame).toEqual(0);
  });

  it("should be able receive a roll", function() {
    game.bowl(1);
    expect(game.frames[0].firstRoll).toEqual(1);
  });

  it("should increment the current turn by one after each roll", function() {
    game.bowl(1);
    expect(game.currentRoll).toEqual(1);
  });

  it("should update record the score after each frame", function() {
    game.bowl(1);
    game.bowl(2);
    expect(game.calculateScore()).toEqual(3);
  });

  it("should increment the frame count after the frame is finished", function() {
    game.bowl(1);
    expect(game.currentFrame).toEqual(0);
    game.bowl(2);
    expect(game.currentFrame).toEqual(1);
  });

  it("should increment the frame after a strike", function () {
    game.bowl(10);
    expect(game.currentFrame).toEqual(1);
  });

  it("can check if previous frame is a spare", function() {
    game.bowl(6);
    game.bowl(4);
    expect(game._isPreviousFrameSpare()).toBe(true);
  });

  it("can check if previous frame is a strike", function() {
    game.bowl(10);
    expect(game._isPreviousFrameStrike()).toBe(true);
  });

  it("should add a bonus of next ball score to the current frame score if current round is a spare", function() {
    game.bowl(9);
    game.bowl(1);
    game.bowl(2);
    game.bowl(3);
    expect(game.frameScores[0]).toEqual(12)
  });

it("should add a bonus of both next ball scores to the current frame score if current round is a strike", function() {
    game.bowl(10);
    game.bowl(1);
    game.bowl(2);
    expect(game.frameScores[0]).toEqual(13)
  });











});





// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
