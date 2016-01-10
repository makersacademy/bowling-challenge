describe('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game(frame);
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
      game.addFrame([5,3]);
      expect(game.scorecard).toContain([5,3]);
    });
  });

  xdescribe('#bowl', function(){
    it('should tell the frame how many pins fell', function(){
      game.bowl(3);
      game.bowl(4);
      expect(game.scorecard).toContain([3,4]);
   });
  });

  describe('#calculateScore', function(){
    it('should add the results of a single frame', function(){
      game.addFrame([5,3]);
      expect(game.calculateScore()).toEqual(8);
    });

    xit('should add the results of multiple frames', function(){
      game.addFrame([5,3]);
      game.addFrame([6,2]);
      expect(game.calculateScore()).toEqual(16);
    });
  });

})
