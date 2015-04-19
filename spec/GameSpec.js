// describe('Game', function(){
//
//   beforeEach(function(){
//     game = new Game();
//     frame = jasmine.createSpyObj('frame', ['frameOne']);
//   });
//
//   it('has a running score facitility', function(){
//     expect(game.runningScore).toEqual(0);
//   });
// 
//   it('has a method of frame 1', function(){
//     expect(game.frame1).toBeDefined();
//   });
//
//   // Does this Test Actually Do Anything??!?!
//   it('can take a frame as a parameter', function(){
//     frame.frameOne.and.callFake(function(){
//       [5, 5, 'spare'];
//     });
//     expect(game.frame1(frame)).toEqual([5, 5, 'spare']);
//   });
//
//   it('runningScore can be changed', function(){
//     frame.frameOne.and.callFake(function(){
//       [5, 5, 'spare'];
//   });
//     expect(game.runnngScore).toEqual(10)
//   });
//
//
//
//
// });
