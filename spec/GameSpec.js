'use strict';

describe("Roll",function(){
  var roll;
  var game;
  beforeEach(function(){
    roll = new Roll();
    game = new Game();
  });

  describe("make a roll",function(){
    it("should add a new roll",function(){
      roll.addRoll(9);
      roll.addRoll(1);
      expect(roll.roll.length).toEqual(2);
    })

    it("throws an error if there are more that 2 rolls in a frame",function(){
      roll.addRoll(2);
      roll.addRoll(1);
      expect(function(){roll.addRoll(4);}).toThrowError('There are a maximum of 2 rolls per frame');
    });

    it("throws an error if the score for 2 rolls in a frame > 10", function(){
      roll.addRoll(2);
      expect(function(){roll.addRoll(9);}).toThrowError("Score for 2 throws cannot exceed 10");
    });

    it("throws an error if a 2nd roll is made if the 1st roll was a strike(i.e. scored 10)",function(){
      roll.addRoll(10);
      expect(function(){roll.addRoll(1)}).toThrowError("You cannot roll a second time if your 1st roll was a strike");
    })

    it("should add a complete frame to the game if the player had had 2 rolls",function(){
      roll.addRoll(6);
      roll.addRoll(4);
      if (roll.rollComplete){
        game.addFrame(roll);    //This is fudged. Do I need to test through the frontend?
      }
      expect(game.frames[0]).toEqual(roll);
    })

    it("should add a complete frame to the game if the player rolled a strike",function(){
      roll.addRoll(10);
      if (roll.rollComplete){
        game.addFrame(roll);    //This is fudged. Do I need to test through the frontend?
      }
      expect(game.frames[0]).toEqual(roll);
    })
  });

  describe("calculate the score",function(){
    it("shows the correct score where frame is not a strike or a spare",function(){
      roll.addRoll(5);
      roll.addRoll(4);
      if (roll.rollComplete){
        game.addFrame(roll);    //This is fudged. Do I need to test through the frontend?
      }
      expect(roll.score).toEqual(9);
    })

    it("shows the correct score where frame is a strike",function(){
      roll.addRoll(10);
      if (roll.rollComplete){
        game.addFrame(roll);    //This is fudged. Do I need to test through the frontend?
      }
      expect(roll.score).toEqual(30);
    })
  })

  describe("end of game",function(){
    it("stops after 10 frames (assuming neither a spare nor a strike) in last frame",function(){
      for(var i=0;i<10;i++){
        roll = new Roll();
        roll.addRoll(6);
        roll.addRoll(4);
        if (roll.rollComplete){
          game.addFrame(roll);    //This is fudged. Do I need to test through the frontend?
        }
      }
      expect(game.gameOver).toEqual(true);
    })

  });

});


describe("Game", function(){
  var game;
  var roll1;
  var roll2;
  beforeEach(function(){
    game = new Game();

  });

  describe("start a new game",function(){
    it("should start a new game", function(){
      expect(game instanceof Game).toEqual(true);
    });
  });

  describe("complete a frame",function(){
    it("should add a new frame",function(){
      game.addFrame("testgame1");
      game.addFrame("testgame2");
      expect(game.frames.length).toEqual(2);
    });
  });

  describe("get frame roll scores",function(){
    it("should return frame scores",function(){
      roll1 = new Roll();
      roll1.addRoll(7);
      roll1.addRoll(2);
      game.addFrame(roll1);
      roll2 = new Roll();
      roll2.addRoll(5);
      roll2.addRoll(2);
      game.addFrame(roll2);
      expect(game.showFrame(2)).toEqual(roll2);
    })
  });

})


// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
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
