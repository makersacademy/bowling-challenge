'use strict';

describe("featureTest",function(){
  var game, frame, bowlingThrow, scorecard;

  describe("Play first frame",function(){
    it("After two throws of 4-5, the total score is 9",function(){
      game = new Game();
      scorecard = new Scorecard();
      frame = new Frame();
      frame.addThrow(4);
      frame.addThrow(5);
      game.addFrame(frame);
      expect(game.score()).toEqual(9);
    });
  });

  describe("Play three frames",function(){
    it("After 4-5, 6-2,7-1, the total score is 25",function(){
      game = new Game();
      scorecard = new Scorecard();
      frame = new Frame();
      frame.addThrow(4);
      frame.addThrow(5);
      game.addFrame(frame);
      var frame2 = new Frame();
      frame2.addThrow(6);
      frame2.addThrow(2);
      game.addFrame(frame2);
      var frame3 = new Frame();
      frame3.addThrow(7);
      frame3.addThrow(1);
      game.addFrame(frame3);
      expect(game.score()).toEqual(25);
    });
  });

});
