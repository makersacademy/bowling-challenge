describe('Game', function(){

  var game;
  var testframe;

  beforeEach(function(){
    game = new Game();
  });

  describe('scorecard', function(){
    it('should be an empty array', function(){
      expect(game.scorecard).toEqual([]);
    });
  });

  describe('frame', function(){
    it('should have a frame', function(){
        expect(game.currentFrame).toBeTruthy();
    });
  });

  describe('#addFrame', function(){
    it('should add a frame to the scorecard', function(){
      spyOn(game.currentFrame, 'getResults').and.returnValue([5,3])
      game.addFrame();
      expect(game.scorecard).toContain([5,3]);
    });
  });

  describe('#bowl', function(){
    it('should tell the frame how many pins fell', function(){
      spyOn(game.currentFrame, 'roll');
      game.bowl(3);
      game.bowl(4);
      expect(game.currentFrame.roll).toHaveBeenCalledWith(3);
      expect(game.currentFrame.roll).toHaveBeenCalledWith(4);
    });
    it('should check if the frame is complete', function(){
      spyOn(game.currentFrame, 'checkComplete');
      game.bowl(3);
      game.bowl(2);
      expect(game.currentFrame.checkComplete).toHaveBeenCalled();
    });
    it('should finalise if frame is complete', function(){
      game.bowl(3);
      game.bowl(2);
      game.bowl(4);
      game.bowl(2);
      expect(game.scorecard).toContain([3, 2],[4,2]);
    });
  });

  describe('#checkOver', function(){
    it('should recognise a game over when 10 frames submitted', function(){
      for (var i = 0; i < 10; i++){
        game.bowl(3);
        game.bowl(2);
      }
      expect(function() {game.bowl(3)}).toThrow('Game over!');
      // expect(game.checkOver()).toReturn(true);
    });
  });

  describe('#scoreCalculator', function(){
    it('should add up the accumulated score', function(){
      game.bowl(5);
      game.bowl(2);
      game.bowl(8);
      game.bowl(2);
      expect(game.scoreCalculator()).toEqual(17);
    })
  })

})
