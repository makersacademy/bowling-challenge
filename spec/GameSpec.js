describe('Game', function(){

  beforeEach(function(){
    game = new Game();
  });

  function gutterGame(){
    for (var i = 0; i < 20; i++){
      game.addPins(0)
    }
  }

  function roll145(){
    for (var i = 0; i < 20; i++){
      game.addPins(5)
    }
  }

  function perfectGame(){
    for  (var i = 0; i < 12; i++){
      game.addPins(10)
    }
  }

  describe('#getCurrentScore', function(){
    it('10 bowls of 1 returns a current score of 20', function(){
      for (var i = 0; i < 20; i++){
        game.addPins(1)
      }
      expect(game.getCurrentScore()).toEqual(20)
    });

    it('gutter game returns a current score of zero', function(){
      for (var i = 0; i < 20; i++){
        game.addPins(0)
      }
      expect(game.getCurrentScore()).toEqual(0)
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

    it('moves to the next frame when a 10 is rolled on the first turn of a frame', function(){
      game.addPins(10)
      expect(game.getCurrentFrame()).toEqual(2)
    });
  });

  describe('#addPins', function(){
    it('adds the number of pins knocked down to the current frame', function(){
      game.addPins(1)
      expect(game.scores[0]).toEqual([1])
    });

    it('throws an error if the number of pins entered is > 10', function(){
      expect( function(){ game.addPins(20); }).toThrow("You can't knock down over 10 pins")
    });

    it('throws an error if the number of pins over two rolls is above 10', function(){
      game.addPins(8)
      expect( function(){ game.addPins(3); }).toThrow("You can't knock down over 10 pins")
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
    });

    it('returns a total score of 150', function(){
      roll145()
      expect(game.getCurrentScore()).toEqual(145)
    });
  });

  describe('#addStrike', function(){
    it('adds the value of the next two rolls to the previous frame if the first roll in that frame is 10', function(){
      game.addPins(10)
      game.addPins(2)
      game.addPins(2)
      expect(game.getCurrentScore()).toEqual(18)
    });

    it('adds roll to the previous two frames if both preceeding rolls are 10', function(){
      game.addPins(10)
      game.addPins(10)
      game.addPins(5)
      expect(game.getCurrentScore()).toEqual(45)
    });
  });

  describe('rolling a spare in the last frame', function(){
    it('has a total of 268', function(){
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(10)
      game.addPins(3)
      game.addPins(7)
      game.addPins(5)
      console.log(game)
      expect(game.getCurrentScore()).toEqual(268)
    });
  });

  describe('rolling a perfect game', function(){
    it('has a total of 300', function(){
      perfectGame()
      console.log(game)
      expect(game.getCurrentScore()).toEqual(300)
    });
  });
});
