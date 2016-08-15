'use strict';

describe('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('begins each new game on frame 1', function(){
    expect(game.getThisFrame()).toEqual(1);
  });

  describe('after 1 frame', function(){
    beforeEach(function(){
      spyOn(Math, 'floor').and.returnValue(4);
    });

    it('changes frame number after completed frame', function(){
      game.completeFrame();
      expect(game.getThisFrame()).toEqual(2);
    });

    it('updates score after first frame', function(){
      game.completeFrame()
      expect(game.getOverallScore()).toEqual(8);
    });
  });

  describe('strike', function() {
    beforeEach(function(){
      spyOn(Math, 'floor').and.returnValue(10);
    });
    it('calculates total after scoring a strike', function(){
      game.playGame()
      game.playGame()
      expect(game.getThisFrame()).toEqual(3)
      expect(game.getOverallScore()).toEqual(30)
    });
  });

  describe('spare', function(){
    beforeEach(function(){
      spyOn(Math, 'floor').and.returnValue(5);
    });
    it('calculate total after scoring a spare', function(){
      game.playGame()
      game.playGame()
      expect(game.getThisFrame()).toEqual(3)
      expect(game.getOverallScore()).toEqual(25)
    });
  });

});
