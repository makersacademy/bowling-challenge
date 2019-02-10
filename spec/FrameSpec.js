'use strict';

describe("Frame", function() {

  var frame;
  var ball;
  var frameScore;

  beforeEach(function() {
    frame = new Frame();
    ball = jasmine.createSpyObj('ball',['roll']);
  });

  // it("can score zero", function() {
  //   expect(frame.score()).toEqual(0);
  // });
  //
  // it("can score a strike", function() {
  //   // spyOn(foo, "getBar").and.returnValue(745);
  //   // spyOn(ball, "roll").and.returnValue(10);
  //
  //   // ball.roll.and.returnValue(10);
  //   frameScore = [10];
  //   expect(frame.score()).toEqual(10);
  // });

});
