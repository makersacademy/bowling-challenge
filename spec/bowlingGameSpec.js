
describe ("bowling game", function() {


  var game;

  beforeEach( function() {
    game = new BowlingGame();

  });


  // it('should be able to start a new game', function() {
  //   var newGame = new BowlingGame();
  // });

  // it('should be able to have a gutter game', function() {
  //   var game = new BowlingGame();
  //   multiRoll(0, 20)
  //   expect(game.score()).toEqual(0)
  // });


  it('should be able to have a score of 5 after one frame', function() {
    game.roll(2);
    game.roll(3);
    multiRoll(0, 18)
    expect(game.score()).toEqual(5)
  });
//
//
  it('should be able to have a score of 12 after two frames', function() {
      game.roll(2);
      game.roll(3);
      game.roll(2);
      game.roll(5);
      multiRoll(0, 16)
    expect(game.score()).toEqual(12)
});
//
//   it('should be able to roll a spare', function () {
//     var game = new BowlingGame;
//     game.roll(6);
//     game.roll(4);
//     game.roll(2);
//     // multiRoll(0, 17)
//     expect(game.score()).toEqual(14)
// });
//
//
//
// //   it('should have a score of 28 after 3 frames including a strike', function(){
// //     var game = new BowlingGame();
// //       game.roll(7);
// //       game.roll(2);
// //       game.roll(10);
// //       // game.roll();
// //       game.roll(4);
// //       game.roll(1);
// //     expect (game.score()).toEqual(28)
// //
// //   });
//
  var multiRoll = function(pins, rolls) {
    for(i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});
