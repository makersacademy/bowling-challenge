describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("registers a gutter ball", function() {
    frame.registerGo(0);
    expect(frame.remainingPins()).toEqual(10); //count pins knocked down?//
  });

  it("registers a successful roll", function(){
    frame.registerGo(5);
    expect(frame.remainingPins()).toEqual(5);
  });

  it("can register 2 rolls", function(){
    frame.registerGo(3);
    frame.registerGo(4);
    expect(frame.remainingPins()).toEqual(3);
  });

  describe('knows when it is over', function() {

    it("after 2 rolls", function(){
      frame.registerGo(4);
      frame.registerGo(5);
      expect(frame.isOver()).toEqual(true);
    });

    it("after all the pins have been knocked down", function(){
      frame.registerGo(10);
      expect(frame.isOver()).toEqual(true);
    });

    it("knows when it is not over after less than 2 rolls", function(){
      expect(frame.isOver()).toEqual(false);
    });

    it("knows the total score", function(){
      frame.registerGo(3);
      frame.registerGo(4);
      expect(frame.total()).toEqual(7);
    });

  });

});













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
// 
