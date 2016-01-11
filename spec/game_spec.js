describe('Game', function(){

  var game;
  var testframe;

  beforeEach(function(){
    game = new Game(testframe);
    testframe = {
      getResults: function(){},
      roll: function(){},
      rerack: function(){}
    };
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

  describe('_newFrame', function(){
    it('should refresh the frame', function(){
      spyOn(game.currentFrame, 'rerack');
      game._newFrame();
      expect(game.currentFrame.rerack).toHaveBeenCalled();
    });
  });

  describe('#over', function(){
    it('should announce game over when 10 scores are submitted', function(){
      for (var i = 0; i < 10; i++){
        game.bowl(3);
        game.bowl(2);
      }
      expect(function() { game.over; }).toThrow('Game Over!');
    });
  });



})
