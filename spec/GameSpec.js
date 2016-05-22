describe('Game', function(){

  var game, frame, split, strike;

  beforeEach(function(){
    game = new Game;
  });

  it('a new game starts at 0 score', function(){
    expect(game.totalScore()).toBe(0);
  });

  describe('#totalScore',function(){
    beforeEach(function(){
      frame = {
        getRolls: function(){
          return [4,5];
        },
        isSpare: function(){
          return false;
        },
        isStrike: function(){
          return false
        }
      };
      spare = {
        getRolls: function(){
          return [5,5];
        },
        isSpare: function(){
          return true;
        },
        isStrike: function(){
          return false
        }
      };
      strike = {
        getRolls: function(){
          return [10];
        },
        isSpare: function(){
          return false;
        },
        isStrike: function(){
          return true
        }
      };
      spyOn(frame, 'getRolls').and.callThrough();
      spyOn(spare, 'getRolls').and.callThrough();
      spyOn(strike, 'getRolls').and.callThrough();
      spyOn(frame, 'isSpare').and.callThrough();
      spyOn(spare, 'isSpare').and.callThrough();
      spyOn(strike, 'isSpare').and.callThrough();
      spyOn(frame, 'isStrike').and.callThrough();
      spyOn(spare, 'isStrike').and.callThrough();
      spyOn(strike, 'isStrike').and.callThrough();
    })

    it('calculates the score of a frame', function() {
      game.play(frame);
      expect(game.totalScore()).toEqual(9);
    });

    it('calculates the score of multiple frames', function(){
      game.play(frame);
      game.play(frame);
      expect(game.totalScore()).toEqual(18);
    });

    describe('spares', function(){
      it('adds the score of the next roll if a spare is rolled', function(){
        game.play(spare);
        game.play(frame);
        expect(game.totalScore()).toEqual(23);
      });

      it("spares arn't calculated until the next roll", function(){
        game.play(frame);
        game.play(spare);
        expect(game.totalScore()).toEqual(9);
      });
    });

    describe('strikes',function(){
      it('adds the score of the next 2 rolls if a strike is rolled', function(){
        game.play(strike);
        game.play(frame);
        expect(game.totalScore()).toEqual(28);
      });

      it('the first roll of the third frame is added if back to back strikes', function(){
        game.play(strike);
        game.play(strike);
        game.play(frame);
        expect(game.totalScore()).toEqual(52);
      })

      it('three strikes means thirty points for the first strike', function(){
        game.play(strike);
        game.play(strike);
        game.play(strike);
        expect(game.totalScore()).toEqual(30);
      });

      it("strikes arn't calculated until two more rolls have been completed", function(){
        game.play(frame);
        game.play(strike);
        game.play(strike);
        expect(game.totalScore()).toEqual(9);
      });

      it("10strikes",function(){
        for(var i = 0; i < 10; i++){
          game.play(strike);
        }
        expect(game.totalScore()).toEqual(240);
      })
    });

  });
});
