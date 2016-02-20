'use strict';

describe("Game",function(){
  var game, frame;

  beforeEach(function(){
    game = new Game();
    frame = {rolls:[4,5]};
  });

  describe("Game setup",function(){
    it("does not contain any frames",function(){
      expect(game.frames.length).toEqual(0);
    });
  });

  describe("addFrame",function(){
    it("adding a frame adds to the number of frames",function(){
      game.addFrame(frame);
      expect(game.frames.length).toEqual(1);
    });
  });

  describe("score",function(){
    it("provides the score of all of the frames",function(){
      game.addFrame(frame);
      expect(game.score()).toEqual(9);
    });
  });

  describe("isOver",function(){
    xit("game is over when ten frames have been played",function(){
      for(var i=0; i<10; i++){
        game.addFrame(frame);
      }
      expect(game.isOver()).toEqual(true);
    });

    it("when the last frame is completed, the final result is returned",function(){
      for(var i=0; i<9; i++){
        game.addFrame(frame);
      }
      expect(game.addFrame(frame)).toEqual('Game over - final score is: 90');
    });

    it("the game is reset after ten frames",function(){
      for(var i=0; i<10; i++){
        game.addFrame(frame);
      }
      expect(game.frames.length).toEqual(0);
    });

  });

});
