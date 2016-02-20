'use strict';

describe("featureTest",function(){
  var game, frame, bowlingRoll, scorecard;

  describe("Final score is calculated automatically",function(){
    it("After two rolls of 4-5, the total score is 9",function(){
      game = new Game();
      frame = new Frame();
      frame.addRoll(4);
      frame.addRoll(5);
      game.addFrame(frame);
      expect(game.score()).toEqual(9);
    });

    it("After 4-5, 6-2,7-1, the total score is 25",function(){
      game = new Game();
      frame = new Frame();
      frame.addRoll(4);
      frame.addRoll(5);
      game.addFrame(frame);
      var frame2 = new Frame();
      frame2.addRoll(6);
      frame2.addRoll(2);
      game.addFrame(frame2);
      var frame3 = new Frame();
      frame3.addRoll(7);
      frame3.addRoll(1);
      game.addFrame(frame3);
      expect(game.score()).toEqual(25);
    });
  });

  describe("Continous updating",function(){

    xit("the score is updated after each roll",function(){
      game = new Game();
      frame = new Frame();
      frame.addRoll(4);
      expect(game.score()).toEqual(4);
    });
  });

  describe("Spares and strikes",function(){

    xit("Calculates the correct value after a spare",function(){
      game = new Game();
      frame = new Frame();
      frame.addRoll(4);
      frame.addRoll(6);
      game.addFrame(frame);
      var frame2 = new Frame();
      frame2.addRoll(5);
      frame2.addRoll(0);
      game.addFrame(frame2);
      expect(game.score()).toEqual(20);
    });
  });

});
