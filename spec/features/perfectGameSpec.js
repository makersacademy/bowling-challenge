describe("Perfect game", function(){
  it("Rolls a 10 for every frame of the game", function(){
    controller = new Controller();
    for(let i=0; i<21; i++){
      controller.addBall(10);
    }
    expect(controller.totalScore()).toEqual(300);
    expect(controller.isGameOver()).toEqual(true);
  });
});
