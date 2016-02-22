'use strict';

describe("featureTest",function(){
  var game, frame, frame2, calculator;

  beforeEach(function(){
    calculator = new ScoreCalculator();
    game = new Game(calculator);
    frame = new Frame();
  });

  describe("Final score is calculated automatically",function(){
    it("After two rolls of 4-5, the total score is 9",function(){
      frame.addRoll(4);
      frame.addRoll(5);
      game.addFrame(frame);
      expect(game.finalScore()).toEqual(9);
    });

    it("After 4-5, 6-2, 7-1, the total score is 25",function(){
      frame.addRoll(4);
      frame.addRoll(5);
      game.addFrame(frame);
      frame2 = new Frame();
      frame2.addRoll(6);
      frame2.addRoll(2);
      game.addFrame(frame2);
      var frame3 = new Frame();
      frame3.addRoll(7);
      frame3.addRoll(1);
      game.addFrame(frame3);
      expect(game.finalScore()).toEqual(25);
    });
  });


  describe("Spares and strikes",function(){

    it("Calculates a perfect game",function(){
      for(var i = 0; i < 9; i++){
        frame2 = new Frame();
        frame2.addRoll(10);
        game.addFrame(frame2);
      }
      frame2 = new Frame('specialFrame');
      frame2.addRoll(10);
      frame2.addRoll(10);
      frame2.addRoll(10);
      game.addFrame(frame2);
      expect(game.finalScore()).toEqual(300);
    });

    it("calculates a zero game",function(){
      for(var i = 0; i < 9; i++){
        frame2 = new Frame();
        frame2.addRoll(0);
        frame2.addRoll(0);
        game.addFrame(frame2);
      }
      frame2 = new Frame('specialFrame');
      frame2.addRoll(0);
      frame2.addRoll(0);
      game.addFrame(frame2);
      expect(game.finalScore()).toEqual(0);

    });
  });

});
