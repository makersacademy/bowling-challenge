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

  describe("random game", function(){
    it("calculates the correct score", function(){
      var bowls = [5,3,8,2,10,6,1,0,10,5,4,3,7,10,6,3,10,10,8]
      var scores = [8,20,17,7,15,9,20,19,9,28]
      for(var i = 0; i < 19; i++){
        game.bowl(bowls.shift());
      }
      expect(game.isOver()).toBe(true);
      expect(game.frames.length).toEqual(10);
      expect(game.currentScore()).toEqual(152);
      game.frames.forEach(function(frame){
        expect(frame.isComplete).toBe(true);
        expect(frame.score).toEqual(scores.shift());
      });
    });
  });

  describe("halfway through a game", function(){

  });

});
