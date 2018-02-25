describe("game", function() {

  beforeEach(function() {
    game = new Game();
  });  

  describe("before a new game", function() {
    it("creates an array of a new empty score card", function() {
      expect(game.scoreCard).toEqual([]);
    });

   it("creates an empty array to store frames", function(){
    expect(game.frame).toEqual([]);
   });
  });

  describe("rolling", function(){
    it("allows player to roll and saves score in array", function(){
      game.roll(3);
      expect(game.scoreCard).toEqual([3]);
    });

    it("can roll a gutter game", function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0); 
    });
  
    it("can roll a game of all ones", function(){
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toEqual(20); 
    });
  });
});


