describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("is an array of rolls", function() {
    expect(frame.bowls).toEqual([]);
  });

  describe("enters bowl scores", function() {

    it("enters a first bowl into the array", function() {
      frame.roll(3);
      expect(frame.bowls).toEqual([3])
    });

    it("enters the second bowl into the array", function() {
      frame.roll(3);
      frame.roll(4);
      expect(frame.bowls).toEqual([3,4])
    });

    beforeEach(function() {
      frame.roll(3);
      frame.roll(4);
      frame.endFrame();
    });

    it("sums the score of two bowls", function() {
      expect(frame.scores).toEqual([7])
    });

    it("empties the frame at the endFrame", function() {
      expect(frame.bowls).toEqual([]);
    });

    it("keeps score over multiple frames", function() {
      frame.roll(1);
      frame.roll(0);
      frame.endFrame();
      expect(frame.scores).toEqual([7,1])
    });

    it("has a running total", function() {
      frame.roll(1);
      frame.roll(0);
      frame.endFrame();
      expect(frame.runningTotal).toEqual(8)
    });

  });

  describe("scoring when bowling a spare", function() {

    it("is not a spare by default", function() {
      expect(frame.isPreviouslySpare).toEqual(false)
    });

    it("knows the previous turn was a spare", function() {
      frame.roll(7);
      frame.roll(3);
      frame.endFrame();
      expect(frame.isPreviouslySpare).toEqual(true)
    });

    it("knows a turn is not spare even a previous was", function() {
      frame.roll(7);
      frame.roll(3);
      frame.endFrame();
      frame.roll(1);
      frame.roll(3);
      frame.endFrame();
      expect(frame.isPreviouslySpare).toEqual(false)
    });

    it("adds the next roll to the previous frame score", function() {
      frame.roll(7);
      frame.roll(3);
      frame.endFrame();
      frame.roll(1);
      frame.roll(3);
      frame.endFrame();
      expect(frame.scores).toEqual([11,4])
    });

    it("has the correct running total", function() {
      frame.roll(7);
      frame.roll(3);
      frame.endFrame();
      frame.roll(1);
      frame.roll(3);
      frame.endFrame();
      expect(frame.runningTotal).toEqual(15)
    });

  });

  // describe("scoring when bowling a strike", function() {
  //   it("knows the previous turn was a strike", function() {
  //     frame.roll(10);
  //     frame.endFrame();
  //     expect(frame).toBePreviouslyStrike
  //   });
  // });

});



  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

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
