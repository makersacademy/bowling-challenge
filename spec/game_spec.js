describe('Game', function(){

  var game

  beforeEach(function(){
    game = new Game();
  });

  describe('scorecard', function(){
    it('should be an empty array', function(){
      expect(game.scorecard).toEqual([]);
    });
  });

  describe('#addFrame', function(){
    it('should add a frame to the scorecard', function(){
        game.addFrame([5,3]);
        expect(game.scorecard).toContain([5,3]);
      });
  });

  describe('#calculateScore', function(){
    it('should add the results of a single frame', function(){
      game.addFrame([5,3]);
      expect(game.calculateScore()).toEqual(8);
    });

    it('should add the results of mulitple frames', function(){
      game.addFrame([5,3]);
      game.addFrame([6,2]);
      expect(game.calculateScore()).toEqual(16);
    });
  });

})
