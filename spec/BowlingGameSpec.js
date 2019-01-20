describe("BowlingGame", function() {
  var game;

    beforeEach(function() {
      game = new BowlingGame();
    });

it("should have a score of zero after 20 gutters", function(){
  for(var i = 0; i < 20; i++){
    game.roll(0);
  }
  expect(game.getScore()).toEqual(0);
});


it("should be able to roll all ones", function(){
  for(var i = 0; i < 20; i++){
    game.roll(1);
  }
  expect(game.getScore()).toEqual(20);
});

//spare is worth 10 PLUS the value of your next roll
it("can roll a spare", function(){
  game.roll(3);
  game.roll(7);
  game.roll(3);
  for(var i = 0; i < 17; i++){
    game.roll(0);
  }
  expect(game.getScore()).toEqual(16)
});

//strike is equal to 10 PLUS the value of your next 2 rolls
it("can roll a strike", function(){
  game.roll(10)
  game.roll(4)
  game.roll(5)
  for(var i=0; i < 17; i ++){
    game.roll(0);
  }
  expect(game.getScore()).toEqual(28)
});




// it("can roll a perfect game", function(){
//   for(var i = 0; i < 12; i++){
//     scorecard.roll(10);
//   }
//   expect(scorecard.getTotal()).toEqual(300);
// });

});