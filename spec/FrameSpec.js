describe("Frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe("Single Frame", function() {
    it("initializes with a score of 0" , function(){
      expect(frame.viewScore()).toEqual(0)
    });

    it("stores the score for the player's first bowl", function(){
      frame.firstBowl(7);
      expect(frame._firstBowlScore).toEqual(7)
    });

    it("stores the score for the player's second bowl", function(){
      frame.secondBowl(2);
      expect(frame._secondBowlScore).toEqual(2)
    });

    it("stores the total score the player's two bowls", function(){
      frame.firstBowl(3);
      frame.secondBowl(4);
      expect(frame.viewScore()).toEqual(7)
    });
    it("records a strike if the player scores ten with the first bowl", function(){
      frame.firstBowl(10);
      expect(frame.isStrike()).toEqual(true)
      });

    it("records a spare if the player scores ten after the second bowl", function(){
      frame.firstBowl(5);
      frame.secondBowl(5);
      expect(frame.isSpare()).toEqual(true)
      });

    it("records a spare if the player scores ten with the second bowl only", function(){
      frame.firstBowl(0);
      frame.secondBowl(10);
      expect(frame.isSpare()).toEqual(true)
    });
  });
});
//
//   it("should initialize with a score of 0", function() {
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
