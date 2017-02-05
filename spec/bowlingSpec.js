
'use strict';

describe('Game', function(){

  var bowl = new Game();
  var a = 1;
  var b = 2;
  var game1 = [[10, 0], [3, 6], [7, 2], [3, 6], [4, 4], [5, 3], [3, 3], [4, 5], [8, 1], [1, 3]];
  var game2 = [[1, 2], [3, 4], [4, 1], [8, 1], [3, 2], [1, 6], [8, 1], [7, 2],[9, 0], [0, 9]];
  var game3= [[1, 9], [3, 6], [7, 2], [3, 6], [4, 4], [5, 3], [3, 3], [4, 5], [8, 1], [2, 6]];
  //is 90. game2


    describe('frame property', function(){
      it('frame length is 2', function(){
        bowl.createFrame(a,b);
        expect(bowl._frame.length).toEqual(2);
      });

      it('frame contains the result of 2 throws', function(){
          expect(bowl._frame).toEqual([1,2]);
      });
    });

    describe('frame score', function(){
      it('returns the sum of the 2 throws', function(){
        expect(bowl.frameScore([1,2])).toEqual(3);
      });
    });

    describe('game ', function(){
      it('size of a game is 10', function(){
        expect(bowl._new_game.length).toEqual(10);
      });

      it('game score is the sum of its frames', function(){
        expect(bowl.gameScoreOrdinary(game2)).toEqual(72)
      });
    });

    describe('strikes', function(){
      it('finds a strike frame',function(){
        expect(bowl.strikes(game1)).toEqual([10,0]);
      });
      it('returns game score with strike', function(){
        expect(bowl.checkGame(game1)).toEqual(90);

      });
    });

    describe('spares', function(){
      it('finds a spare frame', function(){
        expect(bowl.spare(game3)).toEqual([1,9]);
      });

    });

     describe('checkGame ', function(){
       describe('check strikes', function(){
          it('method gameScoreComplex is called for game with strikes frames', function(){
            spyOn(bowl, "gameScoreComplex")
            bowl.checkGame(game1)
            expect(bowl.gameScoreComplex).toHaveBeenCalledWith(game1);
          });

          it('method gameScoreOrdinary is called for game with no strike frames', function(){
            spyOn(bowl, "gameScoreOrdinary")
            bowl.checkGame(game2)
            expect(bowl.gameScoreOrdinary).toHaveBeenCalledWith(game2);
          });
        });

        describe('check spares', function(){
          it('method gameScoreComplex is called for game with spare frames', function(){
             spyOn(bowl,"gameScoreComplex")
             bowl.checkGame(game3)
            expect(bowl.gameScoreComplex).toHaveBeenCalledWith(game3);
          });

          it('methods gameScoreOrdinary is called for game with no spare frames', function(){
            spyOn(bowl, "gameScoreOrdinary")
            bowl.checkGame(game2)
            expect(bowl.gameScoreOrdinary).toHaveBeenCalledWith(game2);
          });
        });
    });
});
