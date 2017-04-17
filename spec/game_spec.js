describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#addFrame', function(){
    it('should add a frame to the game', function(){
      spyOn(game.currentFrame, 'getResults').and.returnValue([5,3])
      game.addFrame();
      expect(game.scoreCard).toContain([5,3]);
      expect(game.frameCount).toEqual(0);
    });
    describe('#addBonus', function(){
      it('should record the current bonus', function(){
        spyOn(game.currentFrame, 'getBonus').and.returnValues(2,1,0);
        game._addBonus();
        game._addBonus();
        game._addBonus();
        expect(game.bonusList).toEqual([2,1,0]);
      });
    })
    describe('#addScore', function(){
      it('should record the current scores', function(){
        game.bowl(10);
        expect(game.scoreCard).toContain([10,0]);
      });
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
      spyOn(game.currentFrame, 'isComplete');
      game.bowl(3);
      game.bowl(2);
      expect(game.currentFrame.isComplete).toHaveBeenCalled();
    });
    it('should finalise if frame is complete', function(){
      game.bowl(3);
      game.bowl(2);
      game.bowl(4);
      game.bowl(2);
      expect(game.scoreCard).toContain([3, 2],[4,2]);
    });
  });

  describe('#checkOver', function(){
    it('should display final score when when 10 frames submitted', function(){
      for (var i = 0; i < 10; i++){
        game.bowl(3);
        game.bowl(2);
      }
      expect(game.checkOver()).toEqual(true);
      expect(game.bowl(3)).toEqual("Final score: 50");
    });
  });

  describe('#checkLastFrame', function(){
    it('should recognise final frame needed when 9 frames submitted', function(){
      for (var i = 0; i < 9; i++){
        game.bowl(3);
        game.bowl(2);
      }
      expect(game.checkLastFrame()).toEqual(true);
    });
  });

  describe('scoring', function(){
    it('should add a standard frame', function(){
      game.bowl(3);
      game.bowl(2);
      expect(game.frameResults).toEqual([5]);
    });
    it('should add a spare', function(){
      game.bowl(8);
      game.bowl(2);
      expect(game.frameResults).toEqual([10]);
    });
    it('should add a strike', function(){
      game.bowl(10);
      expect(game.frameResults).toEqual([10]);
    });

    describe('#calcTotalScore', function(){
      it('should total the current scores', function(){
        game.bowl(5);
        game.bowl(3);
        expect(game.calcTotalScore()).toEqual(8);
        game.bowl(3);
        game.bowl(2);
        expect(game.calcTotalScore()).toEqual(13);
      });
    });
    describe('#calcBonus', function(){
      it('should add next bowl if spare', function(){
        game.bowl(5);
        game.bowl(5);
        expect(game.calcTotalScore()).toEqual(10);
        game.bowl(5);
        game.bowl(5);
        expect(game.calcTotalScore()).toEqual(25);
        game.bowl(1);
        game.bowl(0);
        expect(game.calcTotalScore()).toEqual(27);
      });
      it('should add the next two bowls if strike', function(){
        game.bowl(10);
        game.bowl(1);
        game.bowl(1);
        expect(game.calcTotalScore()).toEqual(14);
        game.bowl(10);
        game.bowl(1);
        game.bowl(1);
        expect(game.calcTotalScore()).toEqual(28);
      });
      it('should recognise if the next bowl is also a strike', function(){
        game.bowl(10);
        game.bowl(10);
        game.bowl(1);
        game.bowl(1);
        expect(game.calcTotalScore()).toEqual(35);
      });
      it('should score a gutter game', function(){
        for(var i = 0; i < 20; i++){
          game.bowl(0);
        }
        expect(game.totalScore).toEqual(0);
      });
      it('should score a perfect game', function(){
        for(var i = 0; i < 12; i++){
          game.bowl(10);
        }
        expect(game.totalScore).toEqual(300);
      });
      it('should score the example game', function(){
        game.bowl(1);
        game.bowl(4);
        game.bowl(4);
        game.bowl(5);
        game.bowl(6);
        game.bowl(4);
        game.bowl(5);
        game.bowl(5);
        game.bowl(10);
        game.bowl(0);
        game.bowl(1);
        game.bowl(7);
        game.bowl(3);
        game.bowl(6);
        game.bowl(4);
        game.bowl(10);
        game.bowl(2);
        game.bowl(8);
        game.bowl(6);
        expect(game.totalScore).toEqual(133);

      })
      it('should score another example game', function(){
      game.bowl(3);
      game.bowl(5);
      game.bowl(6);
      game.bowl(2);
      game.bowl(4);
      game.bowl(6);
      game.bowl(10);
      game.bowl(7);
      game.bowl(3);
      game.bowl(8);
      game.bowl(1);
      game.bowl(10);
      game.bowl(6);
      game.bowl(3);
      game.bowl(2);
      game.bowl(8);
      game.bowl(10);
      game.bowl(7);
      game.bowl(3);
      expect(game.totalScore).toEqual(151);
      })
    });
  });

})
