'use strict';

describe("Game",function(){
  var game, frame, calculator;

  beforeEach(function(){
    calculator = {}
    game = new Game(calculator);
    frame = {rolls:[4,5]};
  });

  describe("Game setup",function(){
    it("does not contain any frames",function(){
      expect(game.frameNr()).toEqual(0);
    });
  });

  describe("addFrame",function(){
    it("adding a frame adds to the number of frames",function(){
      game.addFrame(frame);
      expect(game.frameNr()).toEqual(1);
    });
  });


  describe("isOver",function(){
    it("game is over when ten frames have been played",function(){
      for(var i=0; i<10; i++){
        game.addFrame(frame);
      }
      expect(game.isOver()).toEqual(true);
    });

    xit("when the last frame is completed, the final result is returned",function(){
      for(var i=0; i<9; i++){
        game.addFrame(frame);
      }
      expect(game.addFrame(frame)).toEqual('Game over - final score is: 90');
    });

    xit("the game is reset after ten frames",function(){
      for(var i=0; i<10; i++){
        game.addFrame(frame);
      }
      expect(game.frameNr()).toEqual(0);
    });
  });

  describe("frameNr",function(){
    it("returns the number of frames played",function(){
      game.addFrame(frame);
      expect(game.frameNr()).toEqual(1);
    });

    it("returns the number of frames played",function(){
      game.addFrame(frame);
      game.addFrame(frame);
      game.addFrame(frame);
      expect(game.frameNr()).toEqual(3);
    });
  });

});
