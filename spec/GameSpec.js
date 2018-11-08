describe("Game", function() {
  var game;
   beforeEach(function() {
    game = new Game();
  });

   it("initializes with a current score of 0", function() {
     expect(game.getCurrentScore()).toEqual(0);
   });

   it("returns a score of 0 when player scores 0", function() {
     // for (var i = 0; i < 20; i++) {
       game.roll(0);
     // }
     expect(game.getCurrentScore()).toEqual(0);
   });
   it("returns a score of 1 when player scores 1", function() {
     game.roll(1)
     for (var i = 0; i < 19; i++) {
       game.roll(0);
     }
     expect(game.getCurrentScore()).toEqual(1);
   });
   it("can add scores of multiple values correctly", function() {
     for (var i = 0; i < 5; i++) {
       game.roll(1);
     }
     for (var i = 5; i < 10; i++) {
       game.roll(7);
     }
     for (var i = 10; i < 20; i++) {
       game.roll(2);
     }
     expect(game.getCurrentScore()).toEqual(60);
   })
   it("adds next roll as bonus when a spare completed in first frame", function() {
     game.roll(5);
     game.roll(5);
     for (var i = 0; i < 18; i++) {
       game.roll(1);
     }
     expect(game.getCurrentScore()).toEqual(29)
   })
 });
