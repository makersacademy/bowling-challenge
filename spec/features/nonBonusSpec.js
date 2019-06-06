var Controller = require('../../src/Controller');

describe("Game with no bonus points", function(){
  it("Rolls a non-10 score every frame", function(){
    controller = new Controller();
    for(let i=0; i<20; i++){
      controller.addBall(3);
    }
    expect(controller.totalScore()).toEqual(60);
    expect(controller.isGameOver()).toEqual(true);
  });
});
