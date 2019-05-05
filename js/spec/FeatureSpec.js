'use strict';

describe("Feature test:", function () {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  })

  it("totle score is 0 in a gutter game", function () {
    for (var i = 0; i < 20; i++) {
      bowling.knock(0);
    }
    expect(bowling.getTotalScores(10)).toEqual(0)
  })

  it("totle score is the sum of knocks in 20 rolls in no-bonus game", function () {
    for (var i = 0; i < 20; i++) {
      bowling.knock(4);
    }
    expect(bowling.getTotalScores(10)).toEqual(80)
  })


  it("allow 3rd roll in the 10th frame when spare", function () {
    for (var i = 0; i < 18; i++) {
      bowling.knock(0);
    }
    bowling.knock(6);
    bowling.knock(4);
    bowling.knock(6);

    expect(bowling.getTotalScores(10)).toEqual(16)
  })


  it("allow 3rd roll in the 10th frame when strike", function () {
    for (var i = 0; i < 18; i++) {
      bowling.knock(0);
    }
    bowling.knock(10);
    bowling.knock(9);
    bowling.knock(6);

    expect(bowling.getTotalScores(10)).toEqual(25);
  })


  it("totle score is 300 in a perfect game", function () {
    for (var i = 0; i < 12; i++) {
      bowling.knock(10);
    }
    expect(bowling.getTotalScores(10)).toEqual(300)
  })


});