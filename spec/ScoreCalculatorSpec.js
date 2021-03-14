describe("ScoreCalculator", ()=> {
  let calculator;

  beforeEach(function(){
    calculator = new ScoreCalculator();
  })

  describe("calculate", ()=> {
    it("calculates a score", () => {
      let frames = [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6]]
      expect(calculator.calculate(frames)).toEqual(133)
     })
    
    it("calculates a score during game with two strikes", ()=> {
      frames = [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9,1], [9, 1, 10]]
      expect(calculator.calculate(frames)).toEqual(149) 
    })
      
    it("calculates a score during a perfect game", () => {
      frames = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]
      expect(calculator.calculate(frames)).toEqual(300)
    })  
  })

})





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
