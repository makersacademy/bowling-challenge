describe('Game', function(){

  beforeEach(function(){
    game = new Game();
  });

  describe('#getCurrentScore', function(){
    it('returns a current score of zero', function(){
      for (var i = 0; i < 20; i++){
        game.addPins(1)
      }
      expect(game.getCurrentScore()).toEqual(20)
    });
  });

  describe('#moveToNextFrame', function(){
    it('moves the frame on by one', function(){
      game.moveToNextFrame()
      expect(game.getCurrentFrame()).toEqual(2)
    });

    it('moves to the next frame after two normal rolls', function(){
      game.addPins(1)
      game.addPins(1)
      expect(game.getCurrentFrame()).toEqual(2)
    });
  });

  describe('#addPins', function(){
    it('adds the number of pins knocked down to the current frame', function(){
      game.addPins(1)
      expect(game.scores[0]).toEqual([1])
    });
  });

  describe('#getCurrentTurn', function(){
    it('returns 1 if it is the first turn in a frame', function(){
      expect(game.getCurrentTurn()).toEqual(1)
    });

    it('returns 2 if it is the second turn in a frame', function(){
      game.addPins(1)
      expect(game.getCurrentTurn()).toEqual(2)
    });

    it('returns 1 after two normal rolls', function(){
      game.addPins(1)
      game.addPins(1)
      expect(game.getCurrentTurn()).toEqual(1)
    });
  });

  describe('#addSpare', function(){
    it('adds the value of the next roll following a spare to the previous frame', function(){
      game.addPins(1)
      game.addPins(9)
      game.addPins(3)
      expect(game.scores[0][2]).toEqual(3)
      console.log(game.scores)
    });
  });


});
