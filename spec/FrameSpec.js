// describe('Frame', function(){
//
//   beforeEach(function(){
//     frame = new Frame();
//   });
//
//   it('can record a frame one', function(){
//     expect(frame.frameOne).toBeDefined();
//   });
//
//   it('frameOne can take scores', function(){
//     frame.frameOne(5, 4);
//     expect(frame.score.f1r1).toEqual(5);
//     expect(frame.score.f1r2).toEqual(4);
//   });
//
//   it('frameOne can return a running score', function(){
//     frame.frameOne(5, 4);
//     expect(frame.score.s1).toEqual(9);
//   });
//
//   it('frameOne returns no score if a spare or a strike', function(){
//     expect(frame.frameOne(5, 5)).toEqual(' ')
//   });
//
//   it('frameTwo can return a running score', function(){
//     frame.frameOne(5, 4);
//     frame.frameTwo(5, 4);
//     expect(frame.runningScore).toEqual(18);
//   });
//
//   it('frameTwo can return the correct score if frameOne was a spare', function(){
//     frame.frameOne(5, 5);
//     expect(frame.frameTwo(5, 4)).toEqual(24)
//   });
//
//   it('frameTwo can return the correct score if frameOne was a strike', function(){
//     frame.frameOne(10, 0);
//     frame.frameTwo(5, 4);
//     expect(frame.runningScore).toEqual(28);
//   });
//
//   it('frameThree can return the correct score if frameTwo was a spare', function(){
//     frame.frameOne(5, 4);
//     frame.frameTwo(5, 5);
//     frame.frameThree(5, 4);
//     expect(frame.runningScore).toEqual(33)
//   });
//
//   it('frameThree can return the correct score if frameTwo was a strike', function(){
//     frame.frameOne(5, 4);
//     frame.frameTwo(10, 0);
//     frame.frameThree(5, 4);
//     expect(frame.runningScore).toEqual(37);
//   });
//
//   // it('frameThree can return the correct score if frameOne and frameTwo were strikes', function(){
//   //   frame.frameOne(10, 0);
//   //   frame.frameTwo(10, 0);
//   //   frame.frameThree(5, 4);
//   //   expect(frame.runningScore).toEqual(53);
//   // });
//
//
//
//
//
//   //
//   // it('frameOne can also record a strike', function(){
//   //   frame.frameOne(10, 0);
//   //   expect(frameOneInfo[2]).toEqual('strike');
//   // });
//   //
//   // it('frameOne does not record a strike if the first score is not a 10', function(){
//   //   frame.frameOne(5, 5);
//   //   expect(frameOneInfo[2]).not.toEqual('strike');
//   // });
//   //
//   // it('frameOne records a strike if the first score is a 10', function(){
//   //   frame.frameOne(10, 0);
//   //   expect(frameOneInfo[2]).toEqual('strike');
//   // });
//   //
//   // it('frameOne can record a spare if the first score is not 10 but the total is 10', function(){
//   //   frame.frameOne(1, 9);
//   //   expect(frameOneInfo[2]).toEqual('spare');
//   // });
//   //
//   // it('can return a score after the first frame', function(){
//   //   frame.frameOne(5, 4);
//   //   expect(frame.runningScore).toEqual(9)
//   // });
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   // it('can record a frame two', function(){
//   //   expect(frame.frameTwo).toBeDefined();
//   // });
//   //
//   // it('frameTwo can take scores', function(){
//   //   frame.frameTwo(5, 5);
//   //   expect(frameTwoInfo[0]).toEqual(5);
//   // });
//   //
//   // it('frameTwo can also record a strike', function(){
//   //   frame.frameTwo(10, 0);
//   //   expect(frameTwoInfo[2]).toEqual('strike');
//   // });
//   //
//   // it('frameTwo does not record a strike if the first score is not a 10', function(){
//   //   frame.frameTwo(5, 5);
//   //   expect(frameTwoInfo[2]).not.toEqual('strike');
//   // });
//   //
//   // it('frameTwo records a strike if the first score is a 10', function(){
//   //   frame.frameTwo(10, 0);
//   //   expect(frameTwoInfo[2]).toEqual('strike');
//   // });
//   //
//   // it('frameTwo can record a spare if the first score is not 10 but the total is 10', function(){
//   //   frame.frameTwo(1, 9);
//   //   expect(frameTwoInfo[2]).toEqual('spare');
//   // });
//   //
//   // it('frame can return a score from frame one had no strike or spare', function(){
//   //   frame.frameOne(5, 4);
//   //   frame.frameTwo(5, 4);
//   //   expect(frame.runningScore).toEqual(18);
//   // });
//   //
//   // it('frame can return the correct score if there was a strike in the previous frame', function(){
//   //   frame.frameOne(10, 0);
//   //   frame.frameTwo(5, 4);
//   //   expect(frame.runningScore).toEqual(28);
//   // });
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//   //
//
// });
//
//
//
//
//
//
//
//
//   // NOW JUST REPEATING UNTIL FRAME 10, HOW DO I DRY IT OUT?!
//
//
// //
// //
// //   it('can record a frame three', function(){
// //     expect(frame.frameThree).toBeDefined();
// //   });
// //
// //   it('frameThree can take scores', function(){
// //     frame.frameThree(5, 5);
// //     expect(frameThreeInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameThree can also record a strike', function(){
// //     frame.frameThree(10, 0);
// //     expect(frameThreeInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameThree does not record a strike if the first score is not a 10', function(){
// //     frame.frameThree(5, 5);
// //     expect(frameThreeInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameThree records a strike if the first score is a 10', function(){
// //     frame.frameThree(10, 0);
// //     expect(frameThreeInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameThree can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameThree(1, 9);
// //     expect(frameThreeInfo[2]).toEqual('spare');
// //   });
// //
// //
// //   it('can record a frame four', function(){
// //     expect(frame.frameFour).toBeDefined();
// //   });
// //
// //   it('frameFour can take scores', function(){
// //     frame.frameFour(5, 5);
// //     expect(frameFourInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameFour can also record a strike', function(){
// //     frame.frameFour(10, 0);
// //     expect(frameFourInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameFour does not record a strike if the first score is not a 10', function(){
// //     frame.frameFour(5, 5);
// //     expect(frameFourInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameFour records a strike if the first score is a 10', function(){
// //     frame.frameFour(10, 0);
// //     expect(frameFourInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameFour can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameFour(1, 9);
// //     expect(frameFourInfo[2]).toEqual('spare');
// //   });
// //
// //
// //   it('can record a frame five', function(){
// //     expect(frame.frameFive).toBeDefined();
// //   });
// //
// //   it('frameFive can take scores', function(){
// //     frame.frameFive(5, 5);
// //     expect(frameFiveInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameFive can also record a strike', function(){
// //     frame.frameFive(10, 0);
// //     expect(frameFiveInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameFive does not record a strike if the first score is not a 10', function(){
// //     frame.frameFive(5, 5);
// //     expect(frameFiveInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameFive records a strike if the first score is a 10', function(){
// //     frame.frameFive(10, 0);
// //     expect(frameFiveInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameFive can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameFive(1, 9);
// //     expect(frameFiveInfo[2]).toEqual('spare');
// //   });
// //
// //
// //
// //   it('can record a frame six', function(){
// //     expect(frame.frameSix).toBeDefined();
// //   });
// //
// //   it('frameSix can take scores', function(){
// //     frame.frameSix(5, 5);
// //     expect(frameSixInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameSix can also record a strike', function(){
// //     frame.frameSix(10, 0);
// //     expect(frameSixInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameSix does not record a strike if the first score is not a 10', function(){
// //     frame.frameSix(5, 5);
// //     expect(frameSixInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameSix records a strike if the first score is a 10', function(){
// //     frame.frameSix(10, 0);
// //     expect(frameSixInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameSix can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameSix(1, 9);
// //     expect(frameSixInfo[2]).toEqual('spare');
// //   });
// //
// //
// //   it('can record a frame seven', function(){
// //     expect(frame.frameSeven).toBeDefined();
// //   });
// //
// //   it('frameSeven can take scores', function(){
// //     frame.frameSeven(5, 5);
// //     expect(frameSevenInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameSeven can also record a strike', function(){
// //     frame.frameSeven(10, 0);
// //     expect(frameSevenInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameSeven does not record a strike if the first score is not a 10', function(){
// //     frame.frameSeven(5, 5);
// //     expect(frameSevenInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameSeven records a strike if the first score is a 10', function(){
// //     frame.frameSeven(10, 0);
// //     expect(frameSevenInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameSeven can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameSeven(1, 9);
// //     expect(frameSevenInfo[2]).toEqual('spare');
// //   });
// //
// //
// //
// //   it('can record a frame eight', function(){
// //     expect(frame.frameEight).toBeDefined();
// //   });
// //
// //   it('frameEight can take scores', function(){
// //     frame.frameEight(5, 5);
// //     expect(frameEightInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameEight can also record a strike', function(){
// //     frame.frameEight(10, 0);
// //     expect(frameEightInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameEight does not record a strike if the first score is not a 10', function(){
// //     frame.frameEight(5, 5);
// //     expect(frameEightInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameEight records a strike if the first score is a 10', function(){
// //     frame.frameEight(10, 0);
// //     expect(frameEightInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameEight can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameEight(1, 9);
// //     expect(frameEightInfo[2]).toEqual('spare');
// //   });
// //
// //
// //   it('can record a frame nine', function(){
// //     expect(frame.frameNine).toBeDefined();
// //   });
// //
// //   it('frameNine can take scores', function(){
// //     frame.frameNine(5, 5);
// //     expect(frameNineInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameNine can also record a strike', function(){
// //     frame.frameNine(10, 0);
// //     expect(frameNineInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameNine does not record a strike if the first score is not a 10', function(){
// //     frame.frameNine(5, 5);
// //     expect(frameNineInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameNine records a strike if the first score is a 10', function(){
// //     frame.frameNine(10, 0);
// //     expect(frameNineInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameNine can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameNine(1, 9);
// //     expect(frameNineInfo[2]).toEqual('spare');
// //   });
// //
// //
// //   it('can record a frame ten', function(){
// //     expect(frame.frameTen).toBeDefined();
// //   });
// //
// //   it('frameTen can take scores', function(){
// //     frame.frameTen(5, 5);
// //     expect(frameTenInfo[0]).toEqual(5);
// //   });
// //
// //   it('frameTen can also record a strike', function(){
// //     frame.frameTen(10, 0);
// //     expect(frameTenInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameTen does not record a strike if the first score is not a 10', function(){
// //     frame.frameTen(5, 5);
// //     expect(frameTenInfo[2]).not.toEqual('strike');
// //   });
// //
// //   it('frameTen records a strike if the first score is a 10', function(){
// //     frame.frameTen(10, 0);
// //     expect(frameTenInfo[2]).toEqual('strike');
// //   });
// //
// //   it('frameTen can record a spare if the first score is not 10 but the total is 10', function(){
// //     frame.frameTen(1, 9);
// //     expect(frameTenInfo[2]).toEqual('spare');
// //   });
// //
// //   it('frameTen can accept a third score', function(){
// //     frame.frameTen(10, 10, 5);
// //     expect(frameTenInfo[3]).toEqual(5);
// //   });
// //
// // });
