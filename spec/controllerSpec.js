var Controller = require('../src/Controller');

describe('Controller', function() {
  beforeEach(function (){
    controller = new Controller();

  })

  it("correctly records a ball, updates totals and calculates bonus points for gutter game", function() {
    for(i = 0; i<20; i++) {
      controller.addBall(0);
    }
    expect(controller.totalScore()).toEqual(0);
    expect(controller.isGameOver()).toEqual(true);

  });

  it("correctly calculates the total and bonus scores for strike", function(){
    controller.addBall(10);
    controller.addBall(5);
    controller.addBall(3);

    expect(controller.totalScore()).toEqual(26);
    expect(controller.isGameOver()).toEqual(false);

  })

  it("correctly returns a list of frame totals", function() {
    controller.addBall(5);
    controller.addBall(3);
    expect(controller.frameTotals()).toEqual([8]);

    controller.addBall(5);
    controller.addBall(3);
    expect(controller.frameTotals()).toEqual([8, 8]);

  })
});
