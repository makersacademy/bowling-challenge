describe("the Bowling Game", function(){

  var game;

    beforeEach(function(){
      game = new BowlingGame();
    });

    it("can roll gutter game", function(){
       for (var i = 0; i < 20; i++) {
         game.roll(0);
         expect(game.score()).toEqual(0);
       }
    });
});
