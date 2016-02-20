'use strict';

describe("Scorecard",function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  xdescribe("Game setup",function(){
    it("does not contain any frames",function(){
      expect(game.frames.length).toEqual(0);
    });
  });
});
