// describe("Bowling Game", function() {
//   var game;
//
//   beforeEach(function(){
//     game = new Game();
//   });
//
//   it('The game is initialised with a frames array', function(){
//     expect(game.frames()).not.toContain('word');
//   });
//
//   it('Adds the results of two rolls to a new_frame array', function(){
//   game.newframe(1,4);
//   expect(game.frames()).toContain([1,4]);
//   });
//
//   it ('Calculates the total for a frame where the score is less than 10', function()
//   {
//   game.newframe(1,4);
//   expect(game.frameTotal(1)).toEqual(5);
//   });
//
//   it ('Has a framecounter which counts the number of frames', function(){
//   game.newframe(1,4);
//   expect(game.frameCounter()).toEqual(1);
//   });
//
//   it ('Has a score sheet for the frame total', function(){
//     game.newframe(1,4);
//     game.newframe(2,5);
//     game.addToScores(1);
//     game.addToScores(2);
//     expect(game.scores()[2]).toEqual(7);
//   });
//
//   it ('is able to identify a strike', function() {
//     game.newframe(10,0);
//     expect(game.isStrike(1)).toBe(true);
//   });
//
//   it ('is able to identify a spare', function() {
//     game.newframe(5,5);
//     expect(game.isSpare(1)).toBe(true);
//   });
//
//   it ('it can calculate the total for a frame with Spare as previous', function(){
//     game.newframe(5,5);
//     game.newframe(1,4);
//     expect(game.addSpareTotal(2)).toEqual(11);
//   });
//
//   it ('when previous frame is spare it adds next roll to the score', function(){
//   game.newframe(5,5);
//   game.addToScores(1);
//   game.newframe(1,4);
//   game.addToScores(2);
//   expect(game.scores()[1]).toEqual(11);
//   });
//
// });
