// 'use strict'

// var Frame = require('../src/frame');

describe("Frame", function() {


  var frame;
  var scorecard;

  beforeEach(function(){
    // scorecard = new Scorecard();
    frame = new Frame();
    // scorecard = new Scorecard();

  });


it('a user can enter how many pins they knocked down on first roll', function(){
  frame.insertRoll1(3);
  expect(frame.pinsDown[0]).toEqual(3);
})

it('a user can enter how many pins they knocked down on second roll', function(){
  frame.insertRoll2(4);
  expect(frame.pinsDown[1]).toEqual(4);
})

it('a user can see how many pins they knocked down on each turn', function(){
  frame.insertRoll1(3);
  frame.insertRoll2(4);
  expect(frame.pinsDown).toEqual([3,4]);
})

// it('calculates total pins down in a frame', function(){
//   frame.insertRoll1(3);
//   frame.insertRoll2(4);
//   expect(frame.totalPinsDown()).toEqual(7);
// })

it('updates the all pins down scoresheet', function(){
  frame.insertRoll1(3);
 frame.insertRoll2(4);
  expect(frame.allPinsDown).toEqual([[3,4]]);
});


it('updates the all pins down scoresheet for more than one frame', function(){
frame.insertRoll1(3);
 frame.insertRoll2(4);
 frame.insertRoll1(2);
 frame.insertRoll2(4);
  expect(frame.allPinsDown).toEqual([[3,4],[2,4]]);
});

it('only lets the player play 10 frames', function(){
  var i
  for(i=0; i<10; i++)
  {frame.insertRoll1(3);
   frame.insertRoll2(4);}
   expect(function(){frame.insertRoll1(2); }).toThrowError("No frames left")

})

// it('lets the player have 3 rolls if they roll a strike in last frame', function(){
//   var i
//   for(i=0; i<10; i++)
//   {frame.insertRoll1(10);}
//   expect(function(){frame.insertBonusRoll(2); }).not.toThrowError();
//
// })
//
// it('lets the player have 3 rolls if they roll a spare in last frame', function(){
//   var i
//   for(i=0; i<9; i++)
//   {frame.insertRoll1(10);}
//   frame.insertRoll1(6);
//   frame.insertRoll2(4);
//   expect(function(){frame.insertBonusRoll(2); }).not.toThrowError();
//
// })


// it('only lets the player have 2 rolls per frame', function(){
//   frame.insertRoll1(3);
//  frame.insertRoll2(4);
//  expect(function(){frame.insertBonusRoll(3); }).toThrowError("Only 2 rolls per frame")
//
// })

it('can handle a nearly perfect game', function(){
  var i
  for(i=0; i<9; i++)
  {frame.insertRoll1(10);}
  frame.insertRoll1(4);
  frame.insertRoll2(2);
  console.log(frame.scores.length)

  // frame.insertRoll3(10);
  expect(frame.scores).toEqual([30, 60, 90, 120, 150, 180, 210, 234, 250, 256]);
})

it('can handle a normal game', function(){
  var i
     for(i=0; i<10; i++)
    {frame.insertRoll1(4);
    frame.insertRoll2(3);}
    expect(frame.scores).toEqual([7,14,21,28,35,42,49,56,63,70])
})



describe('for frames with a strike', function(){
  it('does not update this.scores when there is a strike', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(10);
     expect(frame.scores).toEqual([7]);
  })

  it('does update this.scores when the strike streak ends', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(10);
     frame.insertRoll1(3);
      frame.insertRoll2(4);
      expect(frame.scores).toEqual([7, 24, 31]);

  })

  it('adds the next roll to a spare', function(){
    frame.insertRoll1(4);
    frame.insertRoll2(6);
    frame.insertRoll1(2);
    frame.insertRoll2(2);
    expect(frame.scores).toEqual([12, 16])
  })


    it('can handle more than one strike in a row', function(){
      var i
      for(i=0; i<6; i++)
      {frame.insertRoll1(10);}
      expect(frame.scores).toEqual([30, 60, 90, 120])

    })

    it('you get zero for a gutter game', function(){
      var i
      for(i=0; i<10; i++)
      {frame.insertRoll1(0);
      frame.insertRoll2(0);}
      expect(frame.scores[frame.scores.length -1]).toEqual(0)
    })

})

describe('for frames with no strike or spare', function(){

  it('updates this.scores', function(){
    frame.insertRoll1(3);
     frame.insertRoll2(4);
     frame.insertRoll1(4);
      frame.insertRoll2(4);
     expect(frame.scores).toEqual([7,15])
  })


// it('leaves a placeholder on pinsDown if there is a strike', function(){
//   frame.insertRoll1(10);
//   expect(frame.pinsDown[1]).toEqual(" ");
// })

// it('updates the all pins down scoresheet for more than one frame and placeholder for strike', function(){
//   frame.insertRoll1(10);
//   frame.insertRoll1(2);
//   frame.insertRoll2(4);
//   expect(frame.allPinsDown).toEqual([[10," "], [2,4]]);
// });


// it('doesnt update this.scores straight after a strike', function(){
//   frame.insertRoll1(3);
//    frame.insertRoll2(4);
//    frame.insertRoll1(10);
//    expect(frame.scores).toEqual([7])
// })

// it('does update this.scores the turn after a strike if thats not a strike / spare', function(){
//   frame.insertRoll1(3);
//    frame.insertRoll2(4);
//   frame.insertRoll1(10);
//   frame.insertRoll1(3);
//    frame.insertRoll2(4);
//    expect(frame.scores).toEqual([7,24,31])
// })




  // it('updates the running total after each frame if no strike or spare', function(){
  //   frame.insertRoll1(2);
  //   frame.insertRoll2(4);
  //   expect(frame.runningTotal()).toEqual(6)
  //
  // })

  // it('does not update the running total if there is a strike', function(){
  //   frame.insertRoll1(2);
  //   frame.insertRoll2(4);
  //   frame.insertRoll1(10);
  //
  //   expect(frame.runningTotal()).toEqual(6)
  // })
  //
  // it('updates the total score if no strike or spare', function(){
  //   frame.insertRoll1(3);
  //   frame.insertRoll2(4);
  //   expect(frame.totalScore()).toEqual(7);
  // })

  // it('when there is a strike, it adds the next two rolls to total for that frame', function(){
  //   frame.insertRoll1(2);
  //   frame.insertRoll2(6);
  //   frame.insertRoll1(10);
  //   frame.insertRoll1(1);
  //   frame.insertRoll2(1);
  //   expect(frame.runningTotal()).toEqual(22);
  // })



})
// it('when there is a spare, it adds the next one role to total for that frame', function(){
//   frame.insertRoll1(4);
//   frame.insertRoll2(6);
//   frame.insertRoll1(1);
//   frame.insertRoll2(1);
//   expect(frame.runningTotal()).toEqual(13);
// });











})

//
//
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
