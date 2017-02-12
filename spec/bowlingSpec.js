
'use strict';

describe('Game', function(){
var bowl;
var a;
var b;
var frame1;
var frame2;
var frame3;
var game0;
var game1;
var game2;
var game3;
var game4;
var gameSize;

beforeEach(function() {

  bowl = new Game();
  a = 1;
  b = 2;
  frame1 = [10, 0];
  frame2 = [9, 1];
  frame3 = [3, 5];

  game0 = [[10, 0], [3, 6], [7, 2], [3, 6],
               [4, 4], [5, 3], [8, 1],[3, 3],
               [4, 5], [1, 3], [2, 8], [7, 4]];
               
  gameSize = bowl.gameMaximumSize(game0);


  game1 = [[10, 0], [3, 6], [7, 2], [3, 6],
               [4, 4], [5, 3], [8, 1],[3, 3],
               [4, 5], [1, 3]];

  game2 = [[1, 2], [3, 4], [4, 1], [8, 1],
               [3, 2], [1, 6], [8, 1], [7, 2],
               [9, 0], [0, 9]];

  game3= [[1, 9], [3, 6], [7, 2], [3, 6],
              [4, 4], [5, 3], [3, 3], [4, 5],
              [8, 1], [2, 6]];

  game4 = [[10, 0], [4, 6], [7, 2], [3, 6],
               [4, 4], [5, 3], [3, 3], [4, 5],
               [8, 1], [2, 3]];

});


    describe('frame property', function(){
      it('frame length is 2', function(){
        bowl.createFrame(a,b);
        expect(bowl._frame.length).toEqual(2);
      });

      it('frame contains the result of 2 throws', function(){
        bowl.createFrame(a,b);
        expect(bowl._frame).toEqual([1,2]);
      });
    });

    describe('frame score', function(){
      it('returns the sum of the 2 throws', function(){
        expect(bowl.frameScore([1,2])).toEqual(3);
      });
    });

    describe('game ', function(){
      it('maximum size of a game is 10', function(){
        expect(gameSize.length).toEqual(10);
      });

      it('game score is the sum of its frames', function(){
        expect(bowl.gameScoreOrdinary(game2)).toEqual(72)
      });
    });

    describe('strikes', function(){

      it('returns true for a strike frame',function(){
        expect(bowl.strikes(frame1)).toEqual(true);
      });

      it('returns false for a frame with no strike',function(){
        expect(bowl.strikes(frame3)).toEqual(false);
      });

      it('returns game score with strike', function(){
        expect(bowl.gameScoreComplex(game1)).toEqual(90);

      });
    });

    describe('spares', function(){

      it('returns true for a spare frame', function(){
        expect(bowl.spare(frame2)).toEqual(true);
      });

      it('returns false for frame with no a spare', function(){
        expect(bowl.spare(frame3)).toEqual(false);
      });

      it('returns game score with spare', function(){
        expect(bowl.gameScoreComplex(game3)).toEqual(88);
      })
    });

    describe('strike and spare', function(){
      it('returns game score with strike and spare', function(){
        expect(bowl.gameScoreComplex(game4)).toEqual(100);
      });
    });
});
