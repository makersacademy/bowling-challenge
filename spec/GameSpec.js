/*globals Game */
describe("BowlingGame",function() {
  "use strict"
  var game;

  beforeEach(function(){
    game = new Game();

  });

  describe('rolls exceptions, ',function(){
    it('error if roll1 is not a number', function(){
      game.roll("7");
      var error = 'rolls are not within range or not numbers'
      expect(function(){ game.roll(3); }).toThrowError(error);
    });

    it('error if roll2 is not a number', function(){
      game.roll(7);
      var error = 'rolls are not within range or not numbers'
      expect(function(){ game.roll("3"); }).toThrowError(error);
    });

    it('error if roll1 is <0', function(){
      game.roll(-3);
      var error = 'rolls are not within range or not numbers'
      expect(function(){ game.roll(3); }).toThrowError(error);
    });

    it('error if roll2 is >10', function(){
      game.roll(3);
      var error = 'rolls are not within range or not numbers'
      expect(function(){ game.roll(12); }).toThrowError(error);
    });

    it('error if roll1+roll2 is >10', function(){
      game.roll(6);
      var error = 'frame can\'t exceed 10';
      expect(function(){ game.roll(7); }).toThrowError(error);
    });
  });



  describe('frame creations,  ',function(){
    beforeEach(function(){
      Game.prototype.rollMany = function(times, pins) {
        for (var i=0; i<times; i++) {
          game.roll(pins);
        }
      };
    });
    it('1 roll with score <10 does not create Frame',function(){
      game.roll(7);
      expect(game.frameLength()).toBe(0);
    });

    it('1 roll with score=10 creates a Frame',function(){
      game.roll(10);
      expect(game.frameLength()).toBe(1);
    });

    it('2 rolls with (3,5) creates a Frame',function(){
      game.roll(3);
      game.roll(5);
      expect(game.frameLength()).toBe(1);
    });
  });
  describe('1 singl frame scores, ',function(){
    it('2 rolls with (0,0) make frame score = 0',function(){
      game.roll(0);
      game.roll(0);
      expect(game.totalScore()).toEqual(0);
    });

    it('2 rolls with (3,4) make frame score = 7',function(){
      game.roll(3);
      game.roll(4);
      expect(game.totalScore()).toEqual(7);
    });

    it('1 rolls with (10) make frame score = 10',function(){
      game.roll(10);
      expect(game.totalScore()).toEqual(10);
      expect(game.frameLength()).toEqual(1);
    });
  });

  describe('multiple simple frame scores, ',function(){
    it('2 frames[1,3],[4,5] make total score 13',function(){
      game.roll(1);
      game.roll(3);
      game.roll(4);
      game.roll(5);
      expect(game.totalScore()).toEqual(13);
    });
  });

  describe('spares, ',function(){
    it('2 frames[7,3],[2,0] make total score 14',function(){
      game.roll(7);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      expect(game.totalScore()).toEqual(30);
    });
  });

  describe('strikes,, ',function(){
    it('1 frames[10,-],[4,4] make total score 26',function(){
      game.roll(10);
      game.roll(4);
      game.roll(4);
      expect(game.totalScore()).toEqual(26);
    });

    it('1 frames[10,-],[10,-] [4,1] [0,0] make total score 44',function(){
      game.roll(10);
      game.roll(10);
      game.roll(4);
      game.roll(1);
      game.roll(0);
      game.roll(0);
      expect(game.totalScore()).toEqual(44);
    });
  });

  describe('10th frame end of game, ',function(){

    var multiRoll = function(rolls, pins){
      for (var i = 0; i < rolls; i++) {
        game.roll(pins);
      }
    };
    it('gutter game ends ',function(){
      multiRoll(20,0);
      expect(game.over()).toBe(true);
    });

    it('game spare needs 1 roll more ',function(){
      multiRoll(18,0);
      game.roll(5);
      game.roll(5);
      game.roll(3);
      expect(game.over()).toBe(true);
    });

    it('game strike needs 1 roll more ',function(){
      multiRoll(18,0);
      game.roll(10);
      game.roll(3);
      game.roll(3);
      expect(game.over()).toBe(true);
    });
  });

  describe('scores 10thframe, ',function(){
    var multiRoll = function(rolls, pins){
      for (var i = 0; i < rolls; i++) {
        game.roll(pins);
      }
    };
    it('perfect game',function(){
      multiRoll(10,10);
      game.roll(10);
      game.roll(10);
      expect(game.totalScore()).toEqual(300);
      expect(game.frameLength()).toEqual(12);
    });

    it('9 frames perfect, spare 10th',function(){
      multiRoll(9,10);
      game.roll(7);
      game.roll(3);
      game.roll(6)
      expect(game.totalScore()).toEqual(273);
    });

    it('almost perfect game, spare in 10thframe',function(){
      multiRoll(9,10);
      game.roll(10);
      game.roll(5);
      game.roll(5);
      expect(game.totalScore()).toEqual(285);
    });
  });
});
