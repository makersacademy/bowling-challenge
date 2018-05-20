describe("Game scenarios", function(){
  var game;

  beforeEach(function(){
    game = new Game;
  });

  it("calculates the correct score and registers a perfect game", function(){
      for(var i = 0; i < 13; i++){
        game.bowl(10);
      }
      expect(game.isOver()).toBe(true);
      expect(game.frames.length).toEqual(10);
      expect(game.currentScore()).toEqual(300);
      game.frames.forEach(function(frame){
        expect(frame.isComplete).toBe(true);
        expect(frame.score).toEqual(30);
      });
  });


  describe("alternating strikes and spares", function(){

    it("calculates the correct score", function(){
      var bowls = [10,7,3,10,6,4,10,5,5,10,0,10,10,6,4,10]

      for(var i = 0; i < 16; i++){
        game.bowl(bowls.shift());
        console.log(game)
      }
      expect(game.isOver()).toBe(true);
      expect(game.frames.length).toEqual(10);
      expect(game.currentScore()).toEqual(200);
      game.frames.forEach(function(frame){
        expect(frame.isComplete).toBe(true);
        expect(frame.score).toEqual(20);
      });
    });

  });

});
