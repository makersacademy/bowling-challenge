describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("frames", function(){
    beforeEach(function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
    });

    it("starts on frame 1", function(){
      expect(game.turn).toEqual(1);
    });

    it("still the same frame after 1 bowl", function(){
      game.bowl();
      expect(game.turn).toEqual(1);
    });

    it("changes frame after 2 bowls", function(){
      game.bowl();
      game.bowl();
      expect(game.turn).toEqual(2);
    });

    it("doesn't keep playing after 10 frames", function(){
      for(var i = 0; i < 20; i++){
        game.bowl();
      };
      expect(function() {game.bowl()}).toThrow("The Game is Over");
    });
  });

  describe("pins", function(){

    beforeEach(function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
    });

    it("frame starts with 10 pins", function(){
      expect(game.pins).toEqual(10);
    });

    it("a bowl knocks down pins", function(){
      game.bowl();
      expect(game.pins).toEqual(6);
    });

    it("resets to ten after two bowls", function(){
      game.bowl();
      game.bowl();
      expect(game.pins).toEqual(10);
    });
  });

  describe("result", function(){
    it("returns 'number of pins' after a normal bowl", function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
      game.bowl();
      expect(game.result()).toEqual("4 pins!");
    });

    it("returns 'game over' after the 10 frames played", function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
      for(var i = 0; i < 20; i++){
        game.bowl();
      };
      expect(game.result()).toEqual("Game Over!");
    });

    it("returns 'spare' if all pins knocked down after 2nd turn", function(){
      spyOn(game, "_getRandomInt").and.returnValue(5);
      game.bowl();
      game.bowl();
      expect(game.result()).toEqual("Spare!");
    });

    it("returns 'strike' if all pins knocked down after 1st turn", function(){
      spyOn(game, "_getRandomInt").and.returnValue(10);
      game.bowl();
      expect(game.result()).toEqual("Strike!");
    });

    it("changes turns after a 'strike", function(){
      spyOn(game, "_getRandomInt").and.returnValue(10);
      game.bowl();
      expect(game.turn).toEqual(2);
    });
  });

  describe("last turn", function(){
    it("allows a third roll if a strike is scored in last turn", function(){
      spyOn(game, "_getRandomInt").and.returnValue(10);
      for (var i = 0; i < 10; i++){
        game.bowl();
      };
      expect(game.turn).toEqual(10);
    });

    it("allows a third roll if a spare is scored in last turn", function(){
      spyOn(game, "_getRandomInt").and.returnValue(5);
      for (var i = 0; i < 20; i++){
        game.bowl();
      };
      expect(game.turn).toEqual(10);
      });
    });

  describe("scores", function(){

    beforeEach(function(){
      spyOn(game, "_getRandomInt").and.returnValue(4);
    });

    it("can see latest score", function(){
      game.bowl();
      expect(game.lastScore()).toEqual(4);
    });

    it("can see the score of the frame", function(){
      for(var i = 0; i<3; i++){
        game.bowl()
      };
      expect(game.frameScore(1)).toEqual(8);
    })

    it("returns a cumulative total", function(){
      for(var i=0; i < 6; i++){
        game.bowl();
      }
      expect(game.total()).toEqual(24);
    });
  });

});