describe("Gutter game", function(){
  it("Rolls a zero for every frame of the game", function(){
    controller = new Controller();
    for(let i=0; i<20; i++){
      controller.addBall(0);
    }
    expect(controller.totalScore()).toEqual(0);
    expect(controller.isGameOver()).toEqual(true);
  });

  it("Rolls a zero for every frame and stops the game", function(){
    controller = new Controller();
    for(let i=0; i<20; i++){
      controller.addBall(0);
    }
    controller.addBall(5);
    expect(controller.totalScore()).toEqual(0);
    expect(controller.isGameOver()).toEqual(true);
  });
});
