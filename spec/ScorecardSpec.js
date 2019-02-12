'use strict';

describe("Scorecard", function() {

  var scorecard;
  var game;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  // FEATURE TEST #1
  it("gutter game score is zero", function() {
    // game = jasmine.createSpyObj('game',['framesArray']);
    // expect(game.framesArray()).toEqual([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    // expect(scorecard.total(game.framesArray())).toEqual(0);
    expect(scorecard.total([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).toEqual(0);
  });

  // FEATURE TEST #2
  it("1 pin per roll scores 20", function() {
    expect(scorecard.total([[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]])).toEqual(20);
  });

  // it("calculate score for 1st frame"), function() {
  //   frame = jasmine.createSpyObj('frame',['roll']);
  //   //frame.roll(1)
  //   //frame.roll(2)
  //   scorecard.turn(1)
  //   scorecard.turn(2)
  //   expect(scorecard.frame(1)).toEqual(3);
  // });

});
